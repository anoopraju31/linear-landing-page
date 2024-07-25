import { type FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { Plus } from 'lucide-react'

export type CarouselCardProps = {
	id: string
	img: string
	title: string
}

const CarouselCard: FC<CarouselCardProps> = ({ img, title }) => {
	return (
		<div className={styles.carousel__card}>
			<button className={styles.outter__container}>
				<div className={styles.img__container}>
					<Image src={img} alt='' width={960} height={914} />
				</div>
				<div className={styles.text__container}>
					<div className={styles.title}>
						<span> {title} </span>
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
