#!/bin/bash
# ============================================
# SlugGenerator.tools VPS 部署脚本
# 在 VPS 上运行：bash deploy.sh
# ============================================

set -e

APP_DIR="/var/www/slug-generator"
REPO_URL=""  # 填你的 git repo 地址，如 git@github.com:youruser/slug-generator.git

echo "=========================================="
echo "  SlugGenerator.tools 部署"
echo "=========================================="

# ---- 1. 系统依赖 ----
echo "[1/6] 检查系统依赖..."

# Node.js（如果没有就安装 v20 LTS）
if ! command -v node &> /dev/null; then
    echo "安装 Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi
echo "  Node: $(node -v)"

# PM2
if ! command -v pm2 &> /dev/null; then
    echo "安装 PM2..."
    sudo npm install -g pm2
fi
echo "  PM2: $(pm2 -v)"

# Nginx
if ! command -v nginx &> /dev/null; then
    echo "安装 Nginx..."
    sudo apt-get update && sudo apt-get install -y nginx
fi
echo "  Nginx: $(nginx -v 2>&1)"

# ---- 2. 拉代码 ----
echo "[2/6] 部署代码..."
if [ -d "$APP_DIR" ]; then
    cd "$APP_DIR"
    git pull origin main
else
    sudo mkdir -p "$APP_DIR"
    sudo chown $USER:$USER "$APP_DIR"
    if [ -n "$REPO_URL" ]; then
        git clone "$REPO_URL" "$APP_DIR"
        cd "$APP_DIR"
    else
        echo "  REPO_URL 未设置，请手动把代码复制到 $APP_DIR"
        echo "  例如：scp -r ./* user@vps:$APP_DIR/"
        cd "$APP_DIR"
    fi
fi

# ---- 3. 安装依赖 + 构建 ----
echo "[3/6] 安装依赖..."
npm ci --production=false

echo "[4/6] 构建项目..."
npm run build

# ---- 4. PM2 启动 ----
echo "[5/6] 启动/重启应用..."
pm2 stop slug-generator 2>/dev/null || true
pm2 delete slug-generator 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

# 设置开机自启
pm2 startup systemd -u $USER --hp $HOME 2>/dev/null || true

# ---- 5. Nginx 配置 ----
echo "[6/6] 配置 Nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/sluggenerator.app
sudo ln -sf /etc/nginx/sites-available/sluggenerator.app /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

# 测试 nginx 配置
sudo nginx -t

# 重载 nginx
sudo systemctl reload nginx

echo ""
echo "=========================================="
echo "  部署完成！"
echo "=========================================="
echo ""
echo "  应用运行在: http://127.0.0.1:3000"
echo "  Nginx 代理: http://你的VPS_IP"
echo ""
echo "  下一步："
echo "  1. 在 Cloudflare 添加 A 记录指向 VPS IP"
echo "  2. Cloudflare SSL 设置为 'Flexible'（或 'Full' 如果配了证书）"
echo "  3. 开启 Cloudflare CDN（橙色云朵）"
echo "  4. 测试：curl -I https://sluggenerator.app"
echo ""
echo "  常用命令："
echo "  pm2 status        # 查看进程状态"
echo "  pm2 logs           # 查看日志"
echo "  pm2 restart slug-generator  # 重启"
echo ""
