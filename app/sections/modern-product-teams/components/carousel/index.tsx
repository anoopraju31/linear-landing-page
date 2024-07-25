import { type FC } from 'react'
import styles from './styles.module.css'
import CarouselCard from '../carousel-card'
import { modernProductCards } from '@/lib/constant'

const Carousel: FC = () => {
	return (
		<div>
			<div className={styles.carousel__container}>
				<div className={styles.carousel__inner__container}>
					{modernProductCards.map((card) => (
						<CarouselCard key={card.id} {...card} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
