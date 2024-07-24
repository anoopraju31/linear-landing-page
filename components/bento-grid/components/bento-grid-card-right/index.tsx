import { ReactNode, type FC } from 'react'
import BentoCardHeading from '../bento-card-heading'
import styles from './styles.module.css'

type Props = {
	title: string
	description: string
	children: ReactNode
}

const BentoGridCardRight: FC<Props> = ({ title, description, children }) => {
	return (
		<div className={styles.bento__card__right}>
			<BentoCardHeading title={title} description={description} />

			{children}
		</div>
	)
}

export default BentoGridCardRight
