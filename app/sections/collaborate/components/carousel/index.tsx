import { type FC } from 'react'
import styles from './styles.module.css'

const Carousel: FC = () => {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.carousel__container}>
					<div className={styles.carousel__inner__container}>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Carousel
