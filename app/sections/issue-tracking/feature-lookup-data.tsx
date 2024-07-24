import { type FeatureLookupProps } from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import Views from '@/assets/views.svg'
import WorkFlow from '@/assets/workflow.svg'
import Sla from '@/assets/sla.svg'
import Filter from '@/assets/filter.svg'

export const issueTrackingFeatureLookup: FeatureLookupProps[] = [
	{
		id: 'issue-tracking-feature-1',
		title: 'Tailored workflows',
		description: 'Track progress across custom issue flows for your team.',
		icon: <WorkFlow />,
	},
	{
		id: 'issue-tracking-feature-2',
		title: 'Custom views',
		description: 'Switch between list and board. Group issues with swimlanes.',
		icon: <Views />,
	},
	{
		id: 'issue-tracking-feature-3',
		title: 'Filters',
		description: 'Refine issue lists down to what’s most relevant to you.',
		icon: <Filter />,
	},
	{
		id: 'issue-tracking-feature-4',
		title: 'SLAs',
		description: 'Automatically apply deadlines to time-sensitive tasks.',
		icon: <Sla />,
	},
]
