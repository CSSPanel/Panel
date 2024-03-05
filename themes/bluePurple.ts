import type { ConfigTheme } from '@nextui-org/theme'

const bluePurple: ConfigTheme['colors'] = {
	primary: {
		50: '#e6f1fe',
		100: '#cce3fd',
		200: '#99c7fb',
		300: '#66aaf9',
		400: '#338ef7',
		500: '#006FEE',
		600: '#005bc4',
		700: '#004493',
		800: '#002e62',
		900: '#001731',
		DEFAULT: '#338ef7',
	},
	secondary: {
		50: '#F2EAFA',
		100: '#E4D4F4',
		200: '#C9A9E9',
		300: '#AE7EDE',
		400: '#9353D3',
		500: '#7828C8',
		600: '#6020A0',
		700: '#481878',
		800: '#301050',
		900: '#180828',
		DEFAULT: '#7828C8',
	},
}

export const bluePurpleDark: ConfigTheme = {
	extend: 'dark',
	colors: bluePurple,
	layout: {
		disabledOpacity: '0.3',
		radius: {
			small: '4px',
			medium: '6px',
			large: '8px',
		},
		borderWidth: {
			small: '1px',
			medium: '2px',
			large: '3px',
		},
	},
}

export const bluePurpleLight: ConfigTheme = {
	extend: 'light',
	colors: bluePurple,
	layout: {
		disabledOpacity: '0.3',
		radius: {
			small: '4px',
			medium: '6px',
			large: '8px',
		},
		borderWidth: {
			small: '1px',
			medium: '2px',
			large: '3px',
		},
	},
}
