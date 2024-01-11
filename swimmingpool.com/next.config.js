/* eslint-disable unicorn/prefer-module */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@poolcorp'],
  images: {
    domains: [
      'images.ctfassets.net',
      'downloads.ctfassets.net',
      'tstpoolimages.azureedge.net',
      'poolimages.azureedge.net',
    ],
  },
};

module.exports = nextConfig;
