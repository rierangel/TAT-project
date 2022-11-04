/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_URL_BACKEND
  }


}

// webpackDevMiddleware: config => {
//   config.watchOptions = {
//     poll: 1000,
//     aggregateTimeout: 300,
//   }

//   return config
// },


module.exports = nextConfig


