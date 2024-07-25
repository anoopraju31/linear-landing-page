import { type FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'

const Customers: FC = () => {
	return (
		<section className={styles.customers}>
			<LayoutWrapper>
				<p className={styles.description__large__screen}>
					<span className={styles.highlight}>
						Powering the world&lsquo;s best product teams.
					</span>
					<br />
					From next-gen startups to established enterprises.
				</p>

				<p className={styles.description__small__screen}>
					Powering the world&lsquo;s best product teams. From next-gen startups
					to established enterprises.
				</p>
			</LayoutWrapper>
		</section>
	)
}

export default Customers
