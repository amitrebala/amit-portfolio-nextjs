/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  assetPrefix: '/amit-portfolio-nextjs',
  basePath: '/amit-portfolio-nextjs',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig