/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configurado para el repositorio google-sheets-store.github.io
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  transpilePackages: ['react-icons'],
}

module.exports = nextConfig
