/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Proxy para o Magento (evita CORS e porta exposta no client)
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
        hostname: 'magento247.ddev.site', // <-- sem porta aqui
        port: '33001',                    // <-- porta aqui
        pathname: '/media/**',
      },
    ],
    // Se usar unoptimized: true, remotePatterns não tem efeito.
    // unoptimized: true,
  },
};

module.exports = nextConfig;
