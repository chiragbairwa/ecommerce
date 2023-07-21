/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com"],
        minimumCacheTTL: 60
     }
}

module.exports = nextConfig
