/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./*.{js,vue,ts}',
		'./_frag/**/*.{js,vue,ts}',
	],
	theme: {
		extend: {
			colors: {
				green: {
					50: '#EFFEF6',
					100: '#DBFDEC',
					200: '#B9F9D8',
					300: '#82F3BB',
					400: '#44E495',
					500: '#1BCC76',
					600: '#0F9D58',
					700: '#11844D',
				},
				black: {
					100: '#D4D4D5',
					200: '#ABABAC',
					300: '#818182',
					400: '#575759',
					500: '#2D2D2F',
					600: '#030306',
					700: '#020205',
					800: '#000000'
				},
				yellow: {
					50: '#FFFDEA',
					100: '#FFFBC6',
					200: '#FFF687',
					300: '#FFEA49',
					400: '#FFDB1E',
					500: '#FBBC04',
					600: '#DE9101',
					700: '#B86705',
				},
				blue: {
					50: '#EFF6FF',
					100: '#DBEAFE',
					200: '#C0DBFD',
					300: '#94C5FC',
					400: '#62A5F8',
					500: '#4285F4',
					600: '#2763E9',
					700: '#1F4ED6',
					800: '#2041AD',
					900: '#1F3B89',
					950: '#182553',
				},
				cinnabar: {
					100: '#FDE5E3',
					500: '#EA4335',
				},
				orange: {
					50: '#FEF3F2',
					100: '#FDE5E3',
					200: '#FDCFCB',
					300: '#FAADA7',
					400: '#F67D73',
					500: '#EA4335',
					600: '#D93729',
					700: '#B62B1F',
				},
				white: {
					primary: '#FFFFFF',
				},
				grey: {
					primary: '#F5F5F5',
				},
			},
			fontFamily: {
				custom: ['PPMori'],
			},
		},
	},
	plugins: [],
};
