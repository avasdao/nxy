/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  async redirects() {
    return [
      {
        source: '/L1',
        destination: '/l1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
