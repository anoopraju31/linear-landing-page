'use client'

import { ReactNode, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'

type Props = {
	layer: number
	icon1: ReactNode
	icon2: ReactNode
	icon3: ReactNode
}

const popIn = {
	initial: {
		opacity: 0,
		scale: 0.8,
		filter: 'blur(5px)',
	},
	animate: {
		opacity: 1,
		scale: 1,
		filter: 'blur(0)',
		transition: {
			type: 'spring',
			duration: 1,
			scale: { duration: 0.8 },
			// filter: { duration: 0.4 },
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		filter: 'blur(5px)',
		transition: {
			ease: 'easeIn',
			duration: 0.7,
			scale: { duration: 0.7 },
			// filter: { duration: 0.3, delay: 0.4 },
		},
	},
}

const GridCell: FC<Props> = ({ layer, icon1, icon2, icon3 }) => {
	return (
		<div className={styles.grid__item}>
			<AnimatePresence>
				{layer === 1 && (
					<motion.div
						variants={popIn}
						initial='initial'
						animate='animate'
						exit='exit'
						className={cn(styles.item)}>
						{icon1}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{layer === 2 && (
					<motion.div
						variants={popIn}
						initial='initial'
						animate='animate'
						exit='exit'
						className={cn(styles.item)}>
						{icon2}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{layer === 3 && (
					<motion.div
						variants={popIn}
						initial='initial'
						animate='animate'
						exit='exit'
						className={cn(styles.item)}>
						{icon3}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
export default GridCell
