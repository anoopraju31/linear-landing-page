import { type FC } from 'react'
import styles from './styles.module.css'
import { cn } from '@/lib/utils'

type Props = {
	badgeText: string
	badgeStyle?: string
	heading: string
}

const SectionHeading: FC<Props> = ({ badgeStyle, badgeText, heading }) => {
	return (
		<div className={styles.section__heading}>
			<div className={styles.badge__container}>
				<div className={cn(styles.badge, badgeStyle)}></div>
				{/*  */}
				<span className={styles.badge__text}> {badgeText} </span>
			</div>

			<h2 className={styles.heading}> {heading} </h2>
		</div>
	)
}

export default SectionHeading
