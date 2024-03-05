import { nextui } from '@nextui-org/theme'
import { bluePurpleDark, bluePurpleLight } from './themes/bluePurple'
import { orangeDark, orangeLight } from './themes/orangeRed'
import { greenDark, greenLight } from './themes/green'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				'light-bluePurple-theme': bluePurpleLight,
				'dark-bluePurple-theme': bluePurpleDark,
				'light-orange-theme': orangeLight,
				'dark-orange-theme': orangeDark,
				'light-green-theme': greenLight,
				'dark-green-theme': greenDark,
			},
			prefix: 'css',
		}),
	],
}
