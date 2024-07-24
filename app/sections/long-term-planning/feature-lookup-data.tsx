import { type FeatureLookupProps } from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import CrossTerm from '@/assets/cross-team.svg'
import Initiative from '@/assets/initiative.svg'
import Insight from '@/assets/insight.svg'
import Milestone from '@/assets/milestone.svg'

export const longTermFeatureLookup: FeatureLookupProps[] = [
	{
		id: 'long-term-feature-1',
		title: 'Initiatives',
		description: 'Coordinate strategic product efforts.',
		icon: <Initiative />,
	},
	{
		id: 'long-term-feature-2',
		title: 'Cross-team projects',
		description: 'Collaborate across teams and departments.',
		icon: <CrossTerm />,
	},
	{
		id: 'long-term-feature-3',
		title: 'Milestones',
		description: 'Break projects down into concrete phases.',
		icon: <Milestone />,
	},
	{
		id: 'long-term-feature-4',
		title: 'Progress insights',
		description: 'Track scope, velocity, and progress over time.',
		icon: <Insight />,
	},
]
