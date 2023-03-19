/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'backdrop-color': 'rgba(0, 0, 0, 0.75);',
			},
		},
	},
	plugins: [],
};
