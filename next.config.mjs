import { readFile } from "node:fs/promises";
const packageJson = JSON.parse(await readFile("./package.json", "utf8"));

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
	distDir: "build",
	// output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.steamstatic.com",
			},
		],
	},
	env: {
		version: packageJson.version,
	},
};

export default nextConfig;
