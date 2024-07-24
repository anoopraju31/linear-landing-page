import { ReactNode, type FC } from 'react'
import styles from './styles.module.css'
import BentoCardHeading from '../bento-card-heading'

type Props = {
	title: string
	description: string
	children: ReactNode
}

const BentoCardLeft: FC<Props> = ({ title, description, children }) => {
	return (
		<div className={styles.bento__card__left}>
			<BentoCardHeading title={title} description={description} />
			{children}
		</div>
	)
}

export default BentoCardLeft
