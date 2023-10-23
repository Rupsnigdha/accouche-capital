/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				quincy: ['quincy-cf', 'serif'],
				articulat: ['articulat-cf', 'sans-serif'],
				wayfinder: ['wayfinder-cf', 'serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#434331',
					secondary: '#171710',
					accent: '#7e8d21',
					neutral: '#a7a788',
					'base-100': '#fffdf9',
					info: '#278bdd',
					success: '#1cc4ab',
					warning: '#f5d666',
					error: '#fa3d50'
				}
			}
		]
	}
};
