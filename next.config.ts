import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/codigo-artista-independente" : "",
  assetPrefix: isGitHubPages ? "/codigo-artista-independente/" : "",
};

export default nextConfig;
