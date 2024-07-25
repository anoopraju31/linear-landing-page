'use client'

import { type FC } from 'react'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'

type Props = {
	isActive?: boolean
	title: string
	handleClick: () => void
}
const TabToggleButton: FC<Props> = ({
	isActive = false,
	title,
	handleClick,
}) => {
	return (
		<button
			onClick={handleClick}
			className={cn(
				styles.toggle__button,
				isActive && styles.toggle__button__active,
			)}>
			<div
				className={cn(
					styles.status__bar,
					isActive && styles.status__bar__active,
				)}
			/>
			{title}
		</button>
	)
}

export default TabToggleButton
