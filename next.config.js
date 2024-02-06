/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
			{
				protocol: 'https',
				hostname: 'i.gifer.com',
			},
		],
		minimumCacheTTL: 60 * 60 * 24,
	},
}
//   loader: 'custom',
//   loaderFile: '',
module.exports = nextConfig
