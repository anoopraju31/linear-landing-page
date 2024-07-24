import { type FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'
import SectionHeading from '@/components/sectionHeading'
import Link from 'next/link'
import Image from 'next/image'

const LongTermPlanning: FC = () => {
	return (
		<section className={styles.long__term__planning}>
			<LayoutWrapper>
				<div className={styles.heading__container}>
					<div className={styles.heading__inner__container}>
						<Link href='/'>
							<SectionHeading
								heading='Set the product direction'
								badgeText='Project and long-term planning'
								badgeStyle='bg-[#68CC58] border-none'
							/>
						</Link>
					</div>
					<div className={styles.description__container}>
						<p>
							<span>Align your team around a unified product timeline.</span>{' '}
							Plan, manage, and track all product initiatives with Linear’s
							visual planning tools.
						</p>
					</div>
				</div>
			</LayoutWrapper>

			<div className={styles.hero__img__wrapper}>
				<Image src='/roadmap.png' alt='' width={3200} height={1620} />
			</div>
		</section>
	)
}

export default LongTermPlanning
