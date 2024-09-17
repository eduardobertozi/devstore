/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'github.com'],
  },
  logging: {
    fetches: true,
  },
}

export default nextConfig
