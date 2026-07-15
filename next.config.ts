import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/growth-log" : "",
  assetPrefix: isGitHubPages ? "/growth-log/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
