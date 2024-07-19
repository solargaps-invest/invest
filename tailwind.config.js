/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// TODO: rename colors to brand-colors
			colors: {
				'light-primary': '#ffffff',
				'light-secondary': '#E0E0E9',
				'dark-primary': '#000000',
				'dark-secondary': '#010101',
				'background-primary': '#111111',
				'brand-yellow': '#F9CD56',
				'brand-yellow-secondary': '#FFC423',
				'brand-grey': '#66666B',
				'brand-grey-secondary': '#1F1F1F',
				'brand-grey-tertiary': '#777E90',
				'dark-grey': ' rgba(255, 255, 255, 0.1)',
				'brand-blue-primary': 'rgba(27, 231, 255, 1)',
				'brand-green-primary': '#00FFA3',
				'bullet-1': '#F3CE6B',
				'bullet-2': '#5CBB3B',
				'bullet-3': '#52BABC',
				'bullet-4': '#E13946',
				'bullet-5': '#375152',
			},
			fontSize: {
				xxs: ['0.75rem', '1.25rem'], //12px - 20px
				sm: ['0.875rem', '1.5rem'], //14px -24
				// "text-base": ['1rem', '1.5rem'], //16px - 24px
				'text-base-l': ['1rem', '1.25em'], //16px - 20px TODO: keep 16 24 and remove 16 20, check 16 16 in button
				// text-xl: ['1.25rem', '1.75rem'], //20px - 28px
				// text-2xl: ['1.5rem', '2rem'], //24px - 32px
				'3xl': ['1.75rem', '2.55rem'], //28px - 41px
				'3.5xl': ['2rem', '2rem'], //32px
				'4xl': ['2.25rem', '2.5rem'], //36px - 40px
				'5xl': ['3rem', '4rem'], //48px - 60px - TODO: keep this
				'6xl': ['4rem', '4rem'], //64px - 64px
				'8xl': ['5.75rem', '7rem'], //92px - 112px
				'9xl': ['7rem', '7rem'], //112px
			},
			// TODO: rename bg
			backgroundImage: {
				'hero-golden': "url('./assets/bg-hero-golden.svg')",
				'background-building': "url('./assets/bg-building.svg')",
				'custom-radial': 'radial-gradient(90.63% 73.44% at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
				'background-yellow': 'linear-gradient(167.43deg, #FFD562 12.35%, #CB9914 93.89%)',
				'yellow-gradient':
					'radial-gradient(271.87% 220.31% at 50% -47.66%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
				'market-golden': "url('./assets/bg-market-golden.svg')",
				'dark-grey-gradient':
					'radial-gradient(232.45% 188.37% at 50% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
				'dark-yellow': 'radial-gradient(175% 141.81% at 50% 104.31%, #FFCC41 0%, rgba(249, 205, 86, 0) 100%) ',
			},
			dropShadow: {
				hero: ' 0px 12px 24px 0px rgba(249, 205, 86, 0.25)',
			},
			flex: {
				20: '1 1 20%',
				32: '1 1 32%',
				37: '1 1 37%',
				44: '1 1 44%',
				48: '1 1 48%',
				59: '1 1 59%',
			},
			maxWidth: {
				128: '32rem',
			},
			screens: {
				xs: '375px',
				'3xl': '1600px',
				// 'sm': '640px',
				// // => @media (min-width: 640px) { ... }

				// md: '766px',
				// => @media (min-width: 768px) { ... }

				// 'lg': '1024px',
				// // => @media (min-width: 1024px) { ... }

				// 'xl': '1280px',
				// // => @media (min-width: 1280px) { ... }

				// '2xl': '1536px',
				// // => @media (min-width: 1536px) { ... }
			},
			letterSpacing: {},
			gridTemplateColumns: {
				awards: 'repeat(5, minmax(224px, 1fr))',
				mission: 'repeat(2, minmax(224px, 327px))',
			},
			transitionProperty: {
				'primary-300': ' transition duration-300 ease-in-out',
			},
		},
	},
	plugins: [],
};
