/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'github.com'],
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
}

export default nextConfig
