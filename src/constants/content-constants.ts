import {
	iconWallet,
	// iconAuto,
	iconCO2,
	iconFlash,
	iconDollar,
	iconHouse,
	iconPackage,
	// iconLeaf,
	// iconPhone,
	// videoPlaceholder,
	awardsSmarter,
	awardsAmazon,
	awardsTechtour,
	awardsCop,
	awardsSvief,
	// imgBlinds,
	// imgInverter,
	// imgMotor,
	// imgPanel,
	loftHome,
	ecoHouse,
	patio,
	// exampleHouse,
	logo,
	// bgBuilding,
	imgGlobe,
	// imgYevgen,
	// imgOleksandr,
	// imgAndrew,
	imgYankoDesign,
	imgTechCrunch,
	imgInterSolar,
	// bgBuildingXs,
	revenueChart,
	iconCnet,
	iconGnc,
	iconInnovationNation,
	iconInterSolar,
	iconMashable,
	iconSingularity,
	iconTechCrunch,
	iconYankoDesign,
	iconAttn,
	iconDigitalTends,
	iconVector,
	iconCo2Red,
	imgDrought,
	imgPanelHome,
	iconCo2White,
	imgMarketChart,
	imgHomeWindows,
	iconQuote,
	avatar4,
	avatar3,
	avatar2,
	avatar1,
} from '../assets';

export const navLinks = [
	{
		id: 'traction',
		title: 'traction',
	},
	{
		id: 'awards',
		title: 'awards',
	},
	{
		id: 'problem-solution',
		title: 'Problem & solution',
	},
	{
		id: 'partnership',
		title: 'partnership',
	},
	{
		id: 'how-it-works',
		title: 'how it works',
	},
	{
		id: 'market',
		title: 'market',
	},
	{
		id: 'team',
		title: 'team',
	},
	{
		id: 'faq',
		title: 'faq',
	},
];

export const buttons = {
	send: 'send',
	invest: 'Invest now',
};

export const logoIcon = {
	src: `${logo}`,
	description: 'Solar Gaps home page',
};

export const heroSection = {
	button: buttons.invest,
	header: `Invest in SolarGaps World's First Smart Solar Blinds`,
	paragraph:
		'Smart blinds automatically track the sun, producing energy while keeping your building cool. Using the abundant vertical space, SolarGaps blinds block heat entering through the windows and reduce air conditioning usage.',
	videoUrl: `https://www.youtube.com/embed/RYkq6ICc4Z8?si=gyE2_oG_UfFlssM_"`,
};
export const statisticSection = {
	cards: [
		{
			title: 'Previously Crowdfunded',
			value: '886 678 $',
		},
		{
			title: 'Min. Invest',
			value: '499,33 $',
		},
		{
			title: 'Investors',
			value: '102',
		},
		{
			title: 'Valuation',
			value: '$15.03M',
		},
	],
};

export const reasonsToInvestSection = {
	header: 'Reasons to innvest',
	cards: [
		{
			title: '4M+ Yearly revenue',
			icon: {
				src: `${iconDollar}`,
				description: 'dollar',
			},
		},
		{
			title: '300+ Yearly installations',
			icon: {
				src: `${iconHouse}`,
				description: 'house',
			},
		},
		{
			title: 'Reducing carbon footprint',
			icon: {
				src: `${iconCO2}`,
				description: 'co2',
			},
		},
		{
			title: '20+ Distributors worldwide',
			icon: {
				src: `${iconPackage}`,
				description: 'package',
			},
		},
		{
			title: 'Lower your bills by 30%',
			icon: {
				src: `${iconWallet}`,
				description: 'wallet',
			},
		},
		{
			title: 'Generate up to 100Wh',
			icon: {
				src: `${iconFlash}`,
				description: 'flash',
			},
		},
	],
};

export const tractionSection = {
	id: 'traction',
	header: 'Traction',
	subHeader: 'International Presence',
	cards: {
		img: {
			src: `${imgGlobe}`,
			description: 'Global partnership map',
		},
		bulletItems: [
			{ title: 'Headquarters', iconColor: `text-brand-yellow` },
			{ title: 'Manufacturing', iconColor: `text-brand-blue-primary` },
			{ title: 'Distributors', iconColor: `text-brand-green-primary` },
		],
		installations: {
			title: 'Installations',
			value: '300+',
		},
		distributor: {
			title: 'Distributor',
			value: '20+',
		},
	},
};

export const revenueSection = {
	subHeader: 'Revenue projections',
	img: {
		src: `${revenueChart}`,
		description: 'Chat of revenue projections',
	},
};

export const milestonesSection = {
	header: 'Milestones',
	cards: [
		{
			year: '2016',
			description: 'NASA AMES Center Singularity University First Patent Received',
		},
		{
			year: '2017',
			description: 'Top Silicon Valley Startups HAX Accelerator Svief Star Award',
		},
		{
			year: '2018',
			description: `CE Certification Declaration Of Performance Declaration Of Conformity Amazon Innovation Award`,
		},
		{
			year: '2019',
			description: 'PCT Patent SmarterE Award Full-Scale Manufacturing',
		},
		{
			year: '2020',
			description: `Horizon 2020 EUR 1M Grant German Design Award Katerva Sustainability Award `,
		},
		{
			year: '2021',
			description: `B2B Product Development Dubai World Expo 2020 NaN Arquitectura Award`,
		},
		{
			year: '2022',
			description: `BMS integrations for B2B sector New production lines concepts and prototypes Eurobrico Innovation Award`,
		},
		{
			year: '2023',
			description: `Increasing product awareness PCT patent expansion for major European countries Tektonica Lisbon Innovation Award`,
		},
	],
};

export const downloadInvestorDeckSection = {
	id: 'download-deck',
	header: 'Download our Investor Deck',
	inputPlaceholder: [
		{ value: 'YOUR NAME', type: 'text', name: 'name' },
		{ value: 'YOUR EMAIL', type: 'email', name: 'email' },
		{ value: 'YOUR PHONE', type: 'tel', name: 'phone' },
	],
	policy: 'By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g. promos, cart reminders) from SolarGaps at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available).',
};

export const featuredOnSection = {
	header: 'Featured on',
	cards: [
		{
			src: `${iconTechCrunch}`,
			description: 'Tech Crunch',
		},
		{
			src: `${iconCnet}`,
			description: 'C net',
		},
		{
			src: `${iconInterSolar}`,
			description: 'Inter Solar',
		},
		{
			src: `${iconYankoDesign}`,
			description: 'Yanko Design',
		},
		{
			src: `${iconDigitalTends}`,
			description: 'Digital Tends',
		},
		{
			src: `${iconMashable}`,
			description: 'Mashable',
		},
		{
			src: `${iconInnovationNation}`,
			description: 'InnovationNation',
		},
		{
			src: `${iconSingularity}`,
			description: 'Singularity',
		},
		{
			src: `${iconGnc}`,
			description: 'GNC',
		},
		{
			src: `${iconAttn}`,
			description: 'ATTN',
		},
	],
};
export const howItWorksSection = {
	header: 'How it works',
	paragraph:
		'SolarGaps smart blinds are the first blinds that automatically track the sun and generate electricity from its energy while keeping your apartment or office cool. Installed on the outside of the building, our blinds will not only lower your power bills but also provide active shading to reduce air conditioning usage and consequently, reduce your carbon footprint.',
	videoUrl: `https://www.youtube.com/embed/RYkq6ICc4Z8?si=gyE2_oG_UfFlssM_"`,
};

export const awardsSection = {
	header: 'Awards',
	cards: [
		{
			title: 'The Smarter E',
			icon: {
				src: `${awardsSmarter}`,
				description: 'awards-smarter',
			},
			subtitle: '2019, Germany',
		},
		{
			title: 'Amazon',
			icon: {
				src: `${awardsAmazon}`,
				description: 'awards-amazons',
			},
			subtitle: '2018, China',
		},
		{
			title: 'TechTour',
			icon: {
				src: `${awardsTechtour}`,
				description: 'awards-techTour',
			},
			subtitle: '2018, Poland',
		},
		{
			title: 'COP 24',
			icon: {
				src: `${awardsCop}`,
				description: 'awards-cop',
			},
			subtitle: '2018, Poland',
		},
		{
			title: 'Svief Star',
			icon: {
				src: `${awardsSvief}`,
				description: 'awards-smarter',
			},
			subtitle: '2017, China',
		},
	],
};

export const pressAboutUsSection = {
	header: 'Press About us',
	cards: [
		{
			title: 'Your windows become powerful with SolarGaps',
			subtitle: 'TechCrunch',
			button: 'READ MORE',
			date: 'May 31, 2017',
			img: { src: `${imgTechCrunch}`, description: '' },
			linkHref:
				'https://techcrunch.com/2017/05/31/solargaps-power-blinds/?guccounter=1&guce_referrer=aHR0cHM6Ly9zb2xhcmdhcHMuY29tLw&guce_referrer_sig=AQAAABbjHlCEzOmIv8WXc9p3CPt3H64mHKcq2KCKAmdiLiWaSKo4s8K5xIYEafCUUm8eAnPLYVzp-ucRTtDOrFDoK8xsvV9vKyxuaS57QUVfm5cscQWWnknYaLmV0b-43jwzoQF207X31Qoeh70TMoTDJDT9dD844GO5pIPNQXo-7NFz',
		},
		{
			title: 'Charge your Tesla and lower your electric bill with these Solar blinds',
			subtitle: 'Yanko Design',
			button: 'READ MORE',
			date: 'February 2, 2020',
			img: { src: `${imgYankoDesign}`, description: '' },
			linkHref: 'https://www.yankodesign.com/2020/02/26/charge-your-tesla-and-lower-your-electric-bill-with-these-solar-blinds/',
		},
		{
			title: `The finalist of ‘The smarter Eʼ 2019in the category ‘Smart Renewable Energy`,
			subtitle: 'InterSolar',
			button: 'READ MORE',
			date: 'February 2, 2020',
			img: { src: `${imgInterSolar}`, description: '' },
			linkHref:
				'https://www.thesmartere.de/news/the-smarter-e-award-2019-recognizing-groundbreaking-projects-for-the-news-energy-world',
		},
	],
};

export const problemSolutionSection = {
	header: 'Problem & Solution',
	section1: {
		img: { src: `${imgDrought}`, description: '' },
		bulletItems: [
			{
				title: 'Global warming',
				icon: {
					src: `${iconCo2Red}`,
					description: '',
					background: 'bg-custom-radial',
				},
			},
			{
				title: '37% of electricity is spent in cities on air conditioning',
				icon: {
					src: `${iconCo2Red}`,
					description: '',
					background: 'bg-custom-radial',
				},
			},
			{
				title: 'Smart cities are limited in space for solar panels',
				icon: {
					src: `${iconCo2Red}`,
					description: '',
					background: 'bg-custom-radial',
				},
			},
		],
	},
	section2: {
		img: { src: `${imgPanelHome}`, description: '' },
		bulletItems: [
			{
				title: 'Reducing carbon footprint',
				icon: {
					src: `${iconCo2White}`,
					description: '',
					background: 'bg-yellow-gradient',
				},
			},
			{
				title: 'Increase energy efficiency',
				icon: {
					src: `${iconVector}`,
					description: '',
					background: 'bg-yellow-gradient',
				},
			},
			{
				title: 'Smart solution for smart cities',
				icon: {
					src: `${iconCo2White}`,
					description: '',
					background: 'bg-yellow-gradient',
				},
			},
		],
	},
};

export const competitionSection = {
	header: 'Competition',
};

export const marketHugeSection = {
	header: 'The Market Is Huge',
	cards: [
		{
			title: 'Blinds & Shades market',
			value: '$21B',
		},
		{
			title: 'Cleantech market',
			value: '$6.4T',
		},
		{
			title: 'Smart office market',
			value: '$46B',
		},
	],
};

// TODO: rename bulletItems

export const marketStructureSection = {
	header: 'The Market Structure',
	img: { src: `${imgMarketChart}`, description: 'Chart which show the percentage of each market segment' },
	bulletItems: [
		{ title: '30% - Office centers ', iconColor: `text-bullet-1` },
		{ title: '15% - Private sector', iconColor: `text-bullet-2` },
		{ title: '15% - Infrastructures', iconColor: `text-bullet-3` },
		{ title: '18% - Retail & Hotels ', iconColor: `text-bullet-4` },
		{ title: '22% - Municipal facilities', iconColor: `text-bullet-5` },
	],
};

export const ourBusinessModelSection = {
	header: 'Our Business Model',
	img: { src: `${imgHomeWindows}`, description: 'Home' },
	bulletItems: [
		{ title: 'Developers and Real Estate Investors' },
		{ title: 'Designers and Architects' },
		{ title: 'PV systems installers' },
		{ title: 'HVAC system installers ' },
		{ title: 'Solar protection systems installers' },
		{ title: 'Goverment institutions' },
	],
	cards: [
		{
			title: 'SolarGaps',
			paragraph1: 'R&D',
			paragraph2: 'R&Marketing',
			paragraph3: 'IT Support',
			paragraph4: '50% margin',
			paragraph5: '48 USD per sq. ft.',
			subTitle: 'Retail',
		},
		{
			title: 'Local Partners',
			paragraph1: 'Sales',
			paragraph2: 'Installation',
			paragraph3: 'Maintenance',
			paragraph4: '45% margin',
			paragraph5: '39 USD per sq. ft.',
			subTitle: 'Enterprise',
		},
	],
};

export const investorsSection = {
	header: 'Investors',
	cards: [
		{
			icon: {
				src: `${iconQuote}`,
				description: '',
			},
			feedback: `I invested in SolarGaps because this will be a GAME CHANGER as the World's First Smart Solar Blinds.`,
			avatar: {
				src: `${avatar1}`,
				description: '',
			},
			name: 'Kelvin Cox',
		},
		{
			icon: {
				src: `${iconQuote}`,
				description: '',
			},
			feedback: `Your company seems to be promising. The type of technology being developed by this startup, it what we'll seek in the future as society.`,
			avatar: {
				src: `${avatar2}`,
				description: '',
			},
			name: `José Fernández`,
		},
		{
			icon: {
				src: `${iconQuote}`,
				description: '',
			},
			feedback: `Great green B2B product with B2C potential, a clear value add & ROI, huge market size.`,
			avatar: {
				src: `${avatar3}`,
				description: '',
			},
			name: `Hendrikus Gierman`,
		},
		{
			icon: {
				src: `${iconQuote}`,
				description: '',
			},
			feedback: `Massive opportunity for the countless glass sky scrapers - residential & commercial both!`,
			avatar: {
				src: `${avatar4}`,
				description: '',
			},
			name: `Mason Revelette`,
		},
	],
};

// // TODO: reneme src to img or icon

// export type ProductCard = typeof productsSection.products.blinds;

// export const productsSection = {
// 	id: 'products',
// 	header: 'Products',

// 	products: {
// 		blinds: {
// 			title: 'Blinds',
// 			img: {
// 				src: `${imgBlinds}`,
// 				description: 'Black blinds for windows',
// 			},
// 		},
// 		panel: {
// 			title: 'Panel',
// 			img: {
// 				src: `${imgPanel}`,
// 				description: 'Solar panel',
// 			},
// 		},
// 		motor: {
// 			title: 'Motor',
// 			img: {
// 				src: `${imgMotor}`,
// 				description: 'Motor',
// 			},
// 		},
// 		inverter: {
// 			title: 'Inverter',
// 			img: {
// 				src: `${imgInverter}`,
// 				description: 'Inverter',
// 			},
// 		},
// 	},
// };

export const installationsSection = {
	header: 'Installations',
};

export const forHomeSection = {
	id: 'for-home',
	subHeader: 'For home',
	cards: [
		{
			title: 'Loft apartment in Hengelo',
			subtitle: 'Netherlands',
			img: { src: `${loftHome}`, description: 'Loft apartment with a glass roof' },
		},
		{
			title: 'Eco House',
			subtitle: 'Lithuania',
			img: { src: `${ecoHouse}`, description: 'Eco house lined with wood' },
		},
		{
			title: 'Patio in Hengelo',
			img: { src: `${patio}`, description: 'Patio made of brick' },
			subtitle: 'Netherlands',
		},
	],
};

// export const imageSection = {
// 	img: { src: `${bgBuilding}`, description: 'Building with vertical solar' },
// 	imgxs: { src: `${bgBuildingXs}`, description: 'Building with vertical solar' },
// };

// export type ExampleTableRow = (typeof forOfficeSection.exampleCard.table)[0];

// export const forOfficeSection = {
// 	id: 'for-office',
// 	header: 'For office',
// 	title: 'Smart Blinds with built-in solar panels for your office building',
// 	paragraph:
// 		'Using the abundant vertical space SolarGaps can block heat entering through the windows and produce energy to power main office operations (up to 100 Watt per 1 sq.m.)',
// 	button: 'Get a GUOTE',
// 	exampleCard: {
// 		title: 'Project example',
// 		img: { src: `${exampleHouse}`, description: 'Modern house with vertical solar panels' },
// 		table: [
// 			{
// 				category: 'Type of commercial property',
// 				information: 'Hotel',
// 			},
// 			{
// 				category: 'Location',
// 				information: 'Cyprus',
// 			},
// 			{
// 				category: 'Window area',
// 				information: '250 sq.m.',
// 			},
// 			{
// 				category: 'Facing',
// 				information: 'South-East',
// 			},
// 			{
// 				category: 'Daily generation',
// 				information: '23 kWh',
// 			},
// 			{
// 				category: 'Project cost',
// 				information: '€ 130000',
// 			},
// 			{
// 				category: 'Annual savings',
// 				information: '€ 44 000',
// 			},
// 		],
// 	},
// };

// export const partnershipsSection = {
// 	id: 'partnership',
// 	header: 'Partnerships',
// 	paragraph1:
// 		'We are actively pursuing partnership around the world to assure our solution is available worldwide. Our marketing team will provide you with a line of customers to your showroom, while we expect professional installation and service from you.',
// 	paragraph2: 'Join our team! With SolarGaps your building can become one step closer to Net Zero.',
// 	cards: {
// 		img: {
// 			src: `${imgGlobe}`,
// 			description: 'Global partnership map',
// 		},
// 		bulletItems: [
// 			{ title: 'Headquarters', iconColor: `text-brand-yellow` },
// 			{ title: 'Manufacturing', iconColor: `text-brand-blue-primary` },
// 			{ title: 'Distributors', iconColor: `text-brand-green-primary` },
// 		],
// 		distributor: {
// 			title: 'Distributor',
// 			description:
// 				'authorized representative in a designated country, who performs full-cycle operations from imports to installation and after-service service',
// 			button: 'APPLY',
// 		},
// 		sales: {
// 			title: 'Sales Partner',
// 			description:
// 				'local sales team, who will refer new customers to us and bring exciting deals, but the execution of the project will be forwarded to an authorized distributor',
// 			button: 'APPLY',
// 		},
// 	},
// };

// export type MissionTeamCard = (typeof missionTeamSection.cards)[0];

// export const missionTeamSection = {
// 	id: 'mission',
// 	header: 'Mission & Team',
// 	title: 'Since 2016 SolarGaps has been on a mission to make energy free and accessible to all',
// 	paragraph1:
// 		'We are pioneering a method of energy distribution that will power the offices, homes and cities of the future. By exploring innovative concepts and adopting new technologies, we can help move every city closer to their Net Zero goals.',
// 	paragraph2:
// 		'JIt is our vision that one day, the home will not be connected to the grid, but rather the grid will be connected to the homes. Together we can create a brighter future.',
// 	cards: [
// 		{
// 			title: 'Yevgen Erik',
// 			subtitle: 'CEO',
// 			img: { src: `${imgYevgen}`, description: 'Photo of CEO' },
// 		},
// 		{
// 			title: 'Oleksandr Krotenko',
// 			subtitle: 'COO',
// 			img: { src: `${imgOleksandr}`, description: 'Photo of COO' },
// 		},
// 		{
// 			title: 'Andrew Koval',
// 			subtitle: 'CTO',
// 			img: { src: `${imgAndrew}`, description: 'Photo of CTO' },
// 		},
// 	],
// };

// // TODO:ipdate descriptio

// export const frequentlyAskedQuestionsSection = {
// 	header: 'Frequently Asked Questions',
// 	cards: [
// 		{
// 			title: 'How does SolarGaps work?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'How can I buy SolarGaps?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'How much energy will it generate?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'How much will I save with SolarGaps?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'How long is the warranty period?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'What is an inverter and why do I need it?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'Do I need to buy the inverter and how much does it cost?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 		{
// 			title: 'Can I buy a home battery for energy storage?',
// 			description:
// 				'Please fill out the form “GET A QUOTE" on our website (be sure to specify the size of the window on which you are going to install SolarGaps facade blinds). We will send you a price estimation by mail.',
// 		},
// 	],
// };

export const footer = {
	address: '2810 N Church St\nPMB 32367\nWilmington, Delaware 19802-4447',
	email: 'hello@solargaps.com',
};
