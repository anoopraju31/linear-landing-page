import { type FC } from 'react'
import LongTermPlanning from './sections/long-term-planning'
import IssueTracking from './sections/issue-tracking'
import Collaborate from './sections/collaborate'
import Foundation from './sections/foundation'
import PreFooter from './sections/prefooter'

const Home: FC = () => {
	return (
		<main className=' min-h-screen'>
			<LongTermPlanning />
			<IssueTracking />
			<Collaborate />
			<Foundation />
			<PreFooter />
		</main>
	)
}

export default Home
