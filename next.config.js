/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.olx.com.br', 'www.portalcatalao.com.br', 'mercadodabola.net.br', 'maps.googleapis.com']
  }
}

module.exports = nextConfig
