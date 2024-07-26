export const blurPopUp = {
	initial: { opacity: 0, filter: 'blur(10px)', y: '20%' },
	animate: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		// transition: { y: { delay: 1, duration: 1 } },
	},
}

export const illustrate = {
	initial: {
		opacity: 0,
		// filter: 'blur(10px)',
		x: 50,
		y: -50,
		z: 300,
	},
	animate: {
		opacity: 1,
		filter: 'blur(0px)',
		x: 0,
		y: 0,
		z: 0,
		// transition: {
		// 	opacity: {
		// 		duration: 0.5,
		// 	},
		// },
	},
}
