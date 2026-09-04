/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  poweredByHeader: false,
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? '/human-certification-web' : '',
  assetPrefix: isGitHubPages ? '/human-certification-web/' : undefined,
};

export default nextConfig;
