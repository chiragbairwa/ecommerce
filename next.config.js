/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com", "placehold.co"],
        minimumCacheTTL: 60
     }
}

module.exports = nextConfig
