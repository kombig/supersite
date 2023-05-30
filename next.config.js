/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/'
  },
  exportPathMap: async function () {
    return {
      "/": {page: "/"},
      "/contacts": {page: "/contacts"},
      "/laser-cutting": {page: "/laser-cutting"},
      "/cutting-pipes": {page: "/cutting-pipes"},
      "/lighting-supports": {page: "/lighting-supports"},
      "/metal-products": {page: "/metal-products"},
      "/powder-painting": {page: "/powder-painting"},
      "/sand-blasting": {page: "/sand-blasting"},
      "/liquid-painting": {page: "/liquid-painting"},
      "/404": {page: "/404"}
    }
  }
}

module.exports = nextConfig