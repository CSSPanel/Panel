import packageJson from './package.json' assert { type: 'json' }

/** @type {import('next').NextConfig} */
const nextConfig = {
	// headers: () => {
	// 	return [
	// 		{
	// 			source: '/:path*',
	// 			headers: [
	// 				{
	// 					key: 'Cache-Control',
	// 					value: 'no-cache, no-store, must-revalidate',
	// 				},
	// 			],
	// 		},
	// 	]
	// },
	distDir: 'build',
	// output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.steamstatic.com',
			},
		],
	},
	env: {
		version: packageJson.version,
	},
}

export default nextConfig
