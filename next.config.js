/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home/1',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/home/1',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
