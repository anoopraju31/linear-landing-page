import { type FC } from 'react'
import styles from './styles.module.css'
import SectionHeading from '@/components/sectionHeading'
import Carousel from './components/carousel'

const Collaborate: FC = () => {
	return (
		<section className={styles.collaborate}>
			<div className={styles.container}>
				<div className={styles.heading__container}>
					<div className={styles.heading__inner__container}>
						<SectionHeading
							heading='Collaborate across tools and teams'
							badgeText='Workflows and integrations'
							badgeStyle='bg-[#b59aff] border-none'
						/>
					</div>

					<div className={styles.heading__text__container}>
						<p>
							Expand the capabilities of the Linear system with a wide variety
							of integrations that keep everyone in your organization aligned
							and focused.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.carousel__container}>
				<Carousel />
			</div>
		</section>
	)
}

export default Collaborate
