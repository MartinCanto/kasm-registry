/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MartinCanto/Kasm Technologies',
    description: 'The MartinCanto store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://martincanto.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
