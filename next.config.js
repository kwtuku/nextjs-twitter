/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['abs.twimg.com', 'help.twitter.com'],
  },
}

module.exports = nextConfig
