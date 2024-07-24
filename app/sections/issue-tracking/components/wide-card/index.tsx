import { type FC } from 'react'
import styles from './styles.module.css'
import BentoCardHeading from '@/components/bento-grid/components/bento-card-heading'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const WideCard: FC = () => {
	return (
		<div className={styles.wide__card}>
			<div className={styles.heading__wrapper}>
				<div className={styles.head__container}>
					<BentoCardHeading
						title='Linear Insights'
						description='Take the guesswork out of product planning with realtime, actionable data analytics.'
					/>

					<Link href='/' className={styles.link}>
						<span> Learn more </span>
						<ChevronRight className='w-4 h-4' />
					</Link>
				</div>
			</div>

			<div className={styles.img__container}>
				<Image src='/dashboard.svg' width={1740} height={930} alt='' />
			</div>
		</div>
	)
}

export default WideCard
