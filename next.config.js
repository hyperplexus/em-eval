/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
  serverRuntimeConfig: {
      PROJECT_ROOT: __dirname
  },
  async rewrites() {
    return [
      {
        source: '/examples/:path*',
        destination: 'http://127.0.0.1:5328/:path*', // Proxy to Backend
      },
    ]
  },
}


module.exports = nextConfig;