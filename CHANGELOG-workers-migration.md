# Cloudflare Workers 迁移变更记录

**日期**: 2026-06-12
**变更类型**: 基础设施迁移（VPS → Cloudflare Workers 免费计划）

---

## 概述

将 sluggenerator.app 从 VPS (192.3.14.207, PM2 + Node.js) 迁移到 Cloudflare Workers 免费计划。使用 `@opennextjs/cloudflare` 适配器将 Next.js 16 输出转换为 Workers 格式。为满足免费计划 3 MiB 压缩体积限制，删除了 11 个低优先级工具页面。

## 新增文件

| 文件 | 用途 |
|------|------|
| `open-next.config.ts` | OpenNext Cloudflare 适配器配置 |
| `wrangler.jsonc` | Cloudflare Workers 部署配置（含域名路由） |
| `.github/workflows/deploy.yml` | GitHub Actions CI/CD（ubuntu-latest 构建 + wrangler deploy） |
| `src/app/api/indexnow/route.ts` | IndexNow 密钥验证 API 路由 |
| `public/a7f3e9c2b8d4615f0e2a9c7b3d8f4e61.txt` | IndexNow 密钥文件 |

## 修改文件

| 文件 | 变更 |
|------|------|
| `next.config.ts` | 新增 `output` 条件判断：`BUILD_TARGET=cloudflare` 时不输出 standalone；新增 IndexNow rewrite 规则 |
| `package.json` | 新增依赖 `@opennextjs/cloudflare` |
| `.gitignore` | 新增 `.env.production`、`/.open-next/`、`/.wrangler/` |

## 删除的工具页面（11 个）

为将 Worker 压缩体积从 3,191 KiB 降至 2,945 KiB（免费计划限制 3 MiB），删除以下低优先级页面：

| 页面 | 删除原因 |
|------|---------|
| `alternating-case-converter` | 零实际搜索量，mOcK cAsE 玩具功能 |
| `constant-case-converter` | 极小众 SCREAMING_SNAKE_CASE |
| `dot-case-converter` | 极小众 dot.case 格式 |
| `json-keys-to-camelcase` | 程序员小众工具，竞争不过专业 JSON 工具站 |
| `json-keys-to-snake-case` | 同上 |
| `lorem-ipsum-generator` | 红海赛道，新站无法竞争 |
| `sort-lines-alphabetically` | 通用文本工具，竞争极激烈 |
| `remove-empty-lines` | 同上 |
| `remove-line-breaks` | 同上 |
| `duplicate-line-remover` | 同上 |
| `plain-text-converter` | 同上 |

## 保留的工具页面（19 个）

| 页面 | 保留原因 |
|------|---------|
| `url-slug-generator` | 核心关键词 |
| `text-to-slug` | 核心替代关键词 |
| `slugify-online` | 核心替代关键词 |
| `permalink-generator` | 长尾关键词 |
| `blog-slug-generator` | 长尾关键词，精准意图 |
| `product-slug-generator` | 长尾关键词，电商场景 |
| `wordpress-slug-generator` | 长尾关键词，WP 生态 |
| `snake-case-converter` | 已强化（Python/SQL 示例），有差异化 |
| `kebab-case-converter` | 与 slug 高度相关 |
| `camelcase-converter` | 编程主流格式 |
| `pascal-case-converter` | 编程主流格式 |
| `title-case-converter` | 有搜索量 |
| `sentence-case-converter` | 有搜索量 |
| `case-converter-online` | 聚合入口页 |
| `utm-builder` | 独立价值工具，搜索量好 |
| `url-encoder-decoder` | 实用工具 |
| `em-dash-remover` | 新建页，利基差异化 |
| `invisible-character-detector` | 新建页，利基差异化 |
| `blog/` | SEO 内容矩阵 |

## 部署架构变更

```
之前: 用户 → Cloudflare CDN → VPS (PM2 + Node.js standalone)
之后: 用户 → Cloudflare Workers（免费计划，边缘运行）
```

## 关键技术细节

- **构建环境**: VPS Linux（OpenNext 在 Windows 上有路径 bug，必须在 Linux 构建）
- **部署方式**: VPS 构建 → SFTP 下载到本地 → 本地 `npx wrangler deploy`（wrangler 已 OAuth 认证）
- **体积优化**: esbuild `--minify --drop:console` + @vercel/og WASM 文件替换为 8 字节 stub
- **最终体积**: 13,856 KiB 未压缩 / 2,945 KiB gzip（限制 3,072 KiB）
- **Workers 路由**: `sluggenerator.app/*` + `www.sluggenerator.app/*`
- **VPS 状态**: PM2 已停止，文件保留在 `/opt/sluggenerator` 可回滚
- **IndexNow**: 696 URL 已提交至 Bing/Yandex/Seznam/Naver

## GitHub Actions（deploy.yml）

> **注意**: CI/CD 工作流已配置但 GitHub Secrets 尚未设置。目前使用手动构建+部署流程。
> 如需启用自动部署，需在 GitHub 仓库设置中添加：
> - `CLOUDFLARE_API_TOKEN`
> - `CLOUDFLARE_ACCOUNT_ID`: `bb1be37b7db46b963c997149cb326154`

## 未同步到 GitHub 的变更

以下变更仅在 VPS (`/opt/sluggenerator`) 上执行，**尚未提交到 GitHub 仓库**：
- 删除 11 个工具页面目录
- 需要在本地仓库同步删除并推送

## 回滚方案

如 Workers 出现问题：
1. VPS SSH: `cd /opt/sluggenerator && pm2 start ecosystem.config.cjs`（或 `pm2 start npm --name slug-generator -- start`）
2. Cloudflare Dashboard 删除 Workers 路由，DNS 恢复指向 VPS IP
