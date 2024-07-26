export const blurPopUp = {
	initial: { opacity: 0, filter: 'blur(10px)', y: '20%' },
	animate: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		// transition: { y: { delay: 1, duration: 1 } },
	},
}
