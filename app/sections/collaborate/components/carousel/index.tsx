import { type FC } from 'react'
import styles from './styles.module.css'
import CarouselCard from '../carouselCard'

const Carousel: FC = () => {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.carousel__container}>
					<div className={styles.carousel__inner__container}>
						<CarouselCard />
						<CarouselCard />
						<CarouselCard />
						<CarouselCard />
						<CarouselCard />
						<CarouselCard />
						<CarouselCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Carousel
