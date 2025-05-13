import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magento.runningland.com.br',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
