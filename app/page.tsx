import { type FC } from 'react'
import LongTermPlanning from './sections/long-term-planning'
import IssueTracking from './sections/issue-tracking'
import Collaborate from './sections/collaborate'
import Foundation from './sections/foundation'
import PreFooter from './sections/prefooter'
import ModernProductTeams from './sections/modern-product-teams'

const Home: FC = () => {
	return (
		<main className=' min-h-screen'>
			<ModernProductTeams />
			<LongTermPlanning />
			<IssueTracking />
			<Collaborate />
			<Foundation />
			<PreFooter />
		</main>
	)
}

export default Home
