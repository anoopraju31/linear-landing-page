import { type FC } from 'react'
import UnderTheHood from './underToHood.svg'
import styles from './styles.module.css'
import SectionHeading from '@/components/sectionHeading'

const Foundation: FC = () => {
	return (
		<section className={styles.foundation}>
			<div className={styles.container}>
				<SectionHeading />
				<div className='h-screen w-5/12 bg-orange-400'></div>
				<div className={styles.under__the__hood}>
					<UnderTheHood />
				</div>
			</div>
		</section>
	)
}

export default Foundation
