import type { NextConfig } from "next";

// Cloudflare Pages builds (CF_PAGES=1) get a fully static export in `out/`,
// since Pages can't run the OpenNext worker. The Workers path (`npm run
// deploy`) and local dev keep the standard build. Image optimization is
// disabled in export mode because it needs a server.
const isCloudflarePages = process.env.CF_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isCloudflarePages && {
    output: "export" as const,
    images: { unoptimized: true },
  }),
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
