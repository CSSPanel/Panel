import type { ConfigTheme } from '@nextui-org/theme'

const green: ConfigTheme['colors'] = {
	primary: {
		50: '#127121',
		100: '#1F8927',
		200: '#31AA31',
		300: '#51CB47',
		400: '#77ED62',
		500: '#77ED62',
		600: '#A1F488',
		700: '#BCF9A1',
		800: '#D8FDC1',
		900: '#EEFEE0',
		DEFAULT: '#77ED62',
	},
	secondary: {
		50: '#05331B',
		100: '#05331B',
		200: '#14663C',
		300: '#14663C',
		400: '#2E9962',
		500: '#2E9962',
		600: '#52CC8D',
		700: '#52CC8D',
		800: '#80FFBD',
		900: '#80FFBD',
		DEFAULT: '#2E9962',
	},
	focus: '#40992E',
}

export const greenDark: ConfigTheme = {
	extend: 'dark',
	colors: green,
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

export const greenLight: ConfigTheme = {
	extend: 'light',
	colors: green,
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
