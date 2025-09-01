/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/m2/:path*',
        destination: 'https://magento247.ddev.site:33001/:path*',
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magento247.ddev.site', 
        port: '33001',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
