const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? "/mohamed-portfolio" : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  ...(isGhPages && { output: "export", basePath, images: { unoptimized: true } }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
