const isProd = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? `/${repo}` : undefined,
  basePath: isProd ? `/${repo}` : undefined,
};

export default nextConfig;

