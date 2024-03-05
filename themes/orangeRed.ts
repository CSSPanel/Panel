import type { ConfigTheme } from '@nextui-org/theme'

const orange: ConfigTheme['colors'] = {
	primary: {
		50: '#FEF3D3',
		100: '#FEE3A7',
		200: '#FED07B',
		300: '#FED07B',
		400: '#FDBC5A',
		500: '#FC9D24',
		600: '#D87C1A',
		700: '#B55F12',
		800: '#92440B',
		900: '#783206',
		DEFAULT: '#FC9D24',
	},
	secondary: {
		50: '#FDF3D7',
		100: '#FDF3D7',
		200: '#FCE3B0',
		300: '#F6CD87',
		400: '#EEB667',
		500: '#E49438',
		600: '#C47428',
		700: '#A4581C',
		800: '#843E11',
		900: '#6D2D0A',
		DEFAULT: '#E49438',
	},
	focus: '#FC9D24',
}

export const orangeDark: ConfigTheme = {
	extend: 'dark',
	colors: orange,
}

export const orangeLight: ConfigTheme = {
	extend: 'light',
	colors: orange,
}
