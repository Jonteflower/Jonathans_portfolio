
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

module.exports = {
  reactStrictMode: true,
  //concurrentFeatures: true,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
}
  //future: { webpack5: true },
}
