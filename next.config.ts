import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isEdgeOne = process.env.EDGEONE === "true";
const githubPagesPath = "/zoe-s-portfolio";

const nextConfig: NextConfig = {
  output: isGithubPages || isEdgeOne ? "export" : undefined,
  basePath: isGithubPages ? githubPagesPath : undefined,
  assetPrefix: isGithubPages ? `${githubPagesPath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
