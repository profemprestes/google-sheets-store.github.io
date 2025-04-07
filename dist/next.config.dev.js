"use strict";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  // Better for deployments
  webpack: function webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx', '.mjs');
    return config;
  }
};