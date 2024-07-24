import { type FC } from 'react'
import UnderTheHood from './underToHood.svg'
import styles from './styles.module.css'
import SectionHeading from '@/components/sectionHeading'
import DefinitionList from './definitionList'
import { foundationList } from '@/lib/constant'

const Foundation: FC = () => {
	return (
		<section className={styles.foundation}>
			<div className={styles.container}>
				<div className={styles.inner__container}>
					<div className={styles.heading__container}>
						<SectionHeading
							badgeText='Under the hood'
							heading='Built on strong foundations'
						/>

						<p>
							{' '}
							Linear is so simple to use, it’s easy to overlook the wealth of
							complex technologies packed under the hood that keep Linear
							robust, safe, and blazing fast.{' '}
						</p>
					</div>

					<div className={styles.list__container}>
						<div className={styles.seperator} />

						<DefinitionList data={foundationList} />
					</div>
				</div>
				{/* <div className='h-screen w-5/12'></div> */}
				<div className={styles.under__the__hood}>
					<UnderTheHood />
				</div>
			</div>
		</section>
	)
}

export default Foundation
