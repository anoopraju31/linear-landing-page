import { type FC } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/sectionHeading'
import {
	BentoGrid,
	BentoGridFeatureLookupWrapper,
	BentoGridSeperator,
	BentoGridTopLayer,
	BentoGridWideCardWrapper,
} from '@/components/bento-grid'
import styles from './styles.module.css'
import BentoCardLeft from '@/components/bento-grid/components/bento-grid-card-left'
import BentoGridCardRight from '@/components/bento-grid/components/bento-grid-card-right'
import FirstCard from './components/first-card'
import SecondCard from './components/second-card'
import WideCard from './components/wide-card'
import BentoGridFeatureLookUpCard from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import { issueTrackingFeatureLookup } from './feature-lookup-data'
import LayoutWrapper from '@/components/layout-wrapper'

const IssueTracking: FC = () => {
	return (
		<section className={styles.issue__tracking}>
			<LayoutWrapper>
				<div className={styles.heading__container}>
					<div className={styles.heading__inner__container}>
						<SectionHeading
							heading='Issue tracking you’ll enjoy using'
							badgeText='Task tracking and sprint planning'
							badgeStyle='bg-[#D4B144] border-none'
						/>

						<div>
							<p>
								<span>Optimized for speed and efficiency.</span> Create tasks in
								seconds, discuss issues in context, and breeze through your work
								in views tailored to you and your team.
							</p>
						</div>
					</div>
				</div>
			</LayoutWrapper>

			<div className={styles.hero__img__wrapper}>
				<Image
					src='/issue-tracking-hero.png'
					alt=''
					width={3200}
					height={1620}
				/>
			</div>

			<LayoutWrapper>
				<BentoGrid>
					<BentoGridTopLayer>
						<BentoCardLeft
							title='Build momentum with Cycles'
							description='Create healthy routines and focus your team on what work should happen next.'>
							<FirstCard />
						</BentoCardLeft>
						<BentoGridCardRight
							title='Manage incoming work with Triage'
							description='Review and assign incoming bug reports, feature requests, and other unplanned work.'>
							<SecondCard />
						</BentoGridCardRight>
					</BentoGridTopLayer>

					<BentoGridWideCardWrapper>
						<WideCard />
					</BentoGridWideCardWrapper>

					<BentoGridSeperator />

					<BentoGridFeatureLookupWrapper>
						{issueTrackingFeatureLookup.map((featureLookup) => (
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

export default IssueTracking
