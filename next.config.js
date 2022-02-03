/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = withBundleAnalyzer({
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'localhost'],
  },
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production'
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    const plugins = [...config.plugins]
    if (prod) {
      plugins.push(new CompressionPlugin())
    }
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      plugins: plugins,
    }
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
