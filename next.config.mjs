/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  poweredByHeader: false,
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? '/human-certification-web' : '',
  assetPrefix: isGitHubPages ? '/human-certification-web/' : undefined,
  env: {
    NEXT_PUBLIC_ASSET_BASE: isGitHubPages ? '/human-certification-web' : '',
  },
};

export default nextConfig;
