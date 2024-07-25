import { type FC } from 'react'
import styles from './styles.module.css'
import CarouselCard from '../carousel-card'

const Carousel: FC = () => {
	return (
		<div>
			<div className={styles.carousel__container}>
				<div className={styles.carousel__inner__container}>
					<CarouselCard />
					<CarouselCard />
					<CarouselCard />
				</div>
			</div>
		</div>
	)
}

export default Carousel
