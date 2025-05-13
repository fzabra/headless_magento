/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magento.puro',
        pathname: '/media/**',
      },
    ],
    unoptimized: true, 
  },
};

module.exports = nextConfig;