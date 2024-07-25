import { type FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { Plus } from 'lucide-react'

const CarouselCard: FC = () => {
	return (
		<div className={styles.carousel__card}>
			<button className={styles.outter__container}>
				<div className={styles.img__container}>
					<Image
						src='/perfection.avif'
						alt=''
						width={960}
						height={914}
						loading='lazy'
					/>
				</div>
				<div className={styles.text__container}>
					<div className={styles.title}>
						<span> Purpose-built for product development </span>
					</div>

					<div className={styles.icon__container}>
						<Plus />
					</div>
				</div>
			</button>
		</div>
	)
}

export default CarouselCard