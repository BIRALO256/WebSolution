/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding:{
				'1/3':'10.101010%',
                '2/3':'66.6666%',
			},
			colors: {
				
				"jovic": "#0a0a0a",
				"jovic-white" :"#ffffff",
				"xephas-navy": "#000525",
				"xephas-yellow": "#fbaa00",
				"jovic-bg": "#fbaa00",
				"xephas-hover":"#1126bf",
				"handle-bg": "#1a1919",
				"jovic-background":"#4A90E2",
				"jovic-text":"#030303"
				
			  },
		},
		fontFamily: {
			mont: ["Montserrat", "sans-serif"],
		  },
	},
	plugins: [],
}
