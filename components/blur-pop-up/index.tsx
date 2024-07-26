'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { blurPopUp } from '@/lib/animations'

type Props = {
	children: ReactNode
	delay?: number
	className?: string
}

const BlurPopUp: FC<Props> = ({ children, delay = 1, className }) => {
	return (
		<motion.div
			variants={blurPopUp}
			initial='initial'
			whileInView='animate'
			className={className}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: 'easeOut', delay }}>
			{children}
		</motion.div>
	)
}

export default BlurPopUp
