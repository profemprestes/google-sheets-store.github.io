"use strict";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Add this if you're using Next.js
  webpack: function webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};