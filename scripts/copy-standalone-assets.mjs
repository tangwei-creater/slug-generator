// Copies static assets into the Next.js standalone output so the
// standalone server can serve CSS/JS/public files. Runs as `postbuild`.
// Cross-platform (Node fs). Safe to run repeatedly.
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const standalone = resolve(root, ".next/standalone");

if (!existsSync(standalone)) {
  console.log("[copy-standalone-assets] no .next/standalone (output:'standalone' off) — skip");
  process.exit(0);
}

const jobs = [
  [resolve(root, ".next/static"), resolve(standalone, ".next/static")],
  [resolve(root, "public"), resolve(standalone, "public")],
];

for (const [src, dest] of jobs) {
  if (existsSync(src)) {
    cpSync(src, dest, { recursive: true });
    console.log(`[copy-standalone-assets] copied ${src} -> ${dest}`);
  } else {
    console.log(`[copy-standalone-assets] missing ${src} — skip`);
  }
}
console.log("[copy-standalone-assets] done");
