import type { ConfigThemes } from '@nextui-org/theme'
import { bluePurpleDark, bluePurpleLight } from './bluePurple'
import { orangeDark, orangeLight } from './orangeRed'
import { greenDark, greenLight } from './green'

export const THEMES_OPTIONS = [
	{
		name: 'Blue Purple',
		value: 'bluePurple',
	},
	{
		name: 'Orange',
		value: 'orange',
	},
	{
		name: 'Green',
		value: 'green',
	},
]

const THEMES: ConfigThemes = {
	'light-bluePurple-theme': bluePurpleLight,
	'dark-bluePurple-theme': bluePurpleDark,
	'light-orange-theme': orangeLight,
	'dark-orange-theme': orangeDark,
	'light-green-theme': greenLight,
	'dark-green-theme': greenDark,
}

export default THEMES
