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
  // Añadimos esta configuración para resolver problemas con react-icons
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime': require.resolve('react/jsx-runtime')
    };
    return config;
  }
}

module.exports = nextConfig
