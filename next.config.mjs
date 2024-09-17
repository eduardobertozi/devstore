/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/public/**/*',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
}

export default nextConfig
