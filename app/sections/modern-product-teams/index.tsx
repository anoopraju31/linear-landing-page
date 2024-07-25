import { type FC } from 'react'
import LayoutWrapper from '@/components/layout-wrapper'
import SectionHeading from './components/section-heading'
import Carousel from './components/carousel'
import styles from './styles.module.css'

const ModernProductTeams: FC = () => {
	return (
		<section className={styles.modern__product__teams}>
			<LayoutWrapper>
				<SectionHeading />
			</LayoutWrapper>

			<Carousel />
		</section>
	)
}

export default ModernProductTeams
