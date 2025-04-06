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
  // Optimizamos la configuración de webpack
  webpack: (config, { dev, isServer }) => {
    // Resolvemos problemas con react-icons
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime': require.resolve('react/jsx-runtime')
    };
    
    // Optimizamos el tamaño del bundle en producción
    if (!dev) {
      // Habilitamos la compresión de código
      config.optimization.minimize = true;
    }
    
    return config;
  }
}

module.exports = nextConfig
