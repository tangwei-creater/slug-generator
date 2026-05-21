#!/bin/bash
# ============================================
# SlugGenerator.app 部署脚本
# 在 VPS /opt/sluggenerator 目录运行：bash deploy.sh
# ============================================

set -e

cd /opt/sluggenerator

echo ">>> Installing dependencies..."
npm install

echo ">>> Building..."
npm run build

echo ">>> Copying static files to standalone..."
rm -rf .next/standalone/.next/static .next/standalone/public
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo ">>> Restarting PM2..."
pm2 restart slug-generator

echo ">>> Waiting for startup..."
sleep 3

echo ">>> Verifying..."
HTTP_CODE=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/)
JS_URL=$(curl -s http://localhost:3000/ | grep -oP '/_next/static/[^"]+\.js' | head -1)
JS_CODE=$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:3000$JS_URL")

if [ "$HTTP_CODE" = "200" ] && [ "$JS_CODE" = "200" ]; then
    echo "✅ Deploy OK! HTML:$HTTP_CODE JS:$JS_CODE"
else
    echo "❌ Deploy FAILED! HTML:$HTTP_CODE JS:$JS_CODE"
    exit 1
fi
