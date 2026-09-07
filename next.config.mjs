/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath ?? (isGitHubPages ? '/human-certification-web' : '');

const nextConfig = {
  poweredByHeader: false,
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath,
  assetPrefix: basePath ? basePath + '/' : undefined,
  env: {
    NEXT_PUBLIC_ASSET_BASE: basePath,
  },
};

export default nextConfig;
