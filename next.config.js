/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone', // Better for deployments
  webpack: (config) => {
    config.resolve.extensions.push('.ts', '.tsx', '.mjs');
    return config;
  }
}
