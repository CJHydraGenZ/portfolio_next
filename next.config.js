const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com'

      }
    ]
  },
}

module.exports = million.next(
  nextConfig
  , { auto: { rsc: true } }
)