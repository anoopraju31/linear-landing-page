import { type FC } from 'react'
import styles from './styles.module.css'

type Props = {
	title: string
	description: string
}

const BentoCardHeading: FC<Props> = ({ title, description }) => {
	return (
		<div className={styles.card__heading}>
			<h3> {title} </h3>
			<p>{description}</p>
		</div>
	)
}

export default BentoCardHeading
