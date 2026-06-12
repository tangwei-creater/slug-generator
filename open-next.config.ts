import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Pure SSG site — no incremental cache / R2 / KV needed.
export default defineCloudflareConfig({});
