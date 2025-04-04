/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Adjust this to match your GitHub repository name
  basePath: '/03-Tienda',
  assetPrefix: '/03-Tienda/',
  trailingSlash: true,
}

module.exports = nextConfig
