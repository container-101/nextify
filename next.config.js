/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'localhost'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
