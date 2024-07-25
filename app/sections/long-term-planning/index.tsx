import { type FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'
import SectionHeading from '@/components/sectionHeading'
import Link from 'next/link'
import Image from 'next/image'
import {
	BentoGrid,
	BentoGridFeatureLookupWrapper,
	BentoGridSeperator,
	BentoGridTopLayer,
	BentoGridWideCardWrapper,
} from '@/components/bento-grid'
import BentoCardLeft from '@/components/bento-grid/components/bento-grid-card-left'
import BentoGridCardRight from '@/components/bento-grid/components/bento-grid-card-right'
import BentoGridFeatureLookUpCard from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import { longTermFeatureLookup } from './feature-lookup-data'
import FirstCard from './components/first-card'
import SecondCard from './components/second-card'
import WideCard from './components/wide-card'

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

			<LayoutWrapper>
				<BentoGrid>
					<BentoGridTopLayer>
						<BentoCardLeft
							title='Manage projects end-to-end'
							description='Consolidate specs, milestones, tasks, and other documentation in one centralized location.'>
							<FirstCard />
						</BentoCardLeft>
						<BentoGridCardRight
							title='Project updates'
							description='Communicate progress and project health with built-in project updates.'>
							<SecondCard />
						</BentoGridCardRight>
					</BentoGridTopLayer>

					<div className='h-6'></div>

					<BentoGridWideCardWrapper>
						<WideCard />
					</BentoGridWideCardWrapper>

					<BentoGridSeperator />

					<BentoGridFeatureLookupWrapper>
						{longTermFeatureLookup.map((featureLookup) => (
							<BentoGridFeatureLookUpCard
								key={featureLookup.id}
								{...featureLookup}
							/>
						))}
					</BentoGridFeatureLookupWrapper>
				</BentoGrid>
			</LayoutWrapper>
		</section>
	)
}

export default LongTermPlanning
