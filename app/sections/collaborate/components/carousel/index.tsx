import { type FC } from 'react'
import styles from './styles.module.css'
import CarouselCard from '../carouselCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

				<div className={styles.card__controls__container}>
					<button className={styles.icon__button}>
						<ChevronLeft />
					</button>
					<button className={styles.icon__button}>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Carousel
