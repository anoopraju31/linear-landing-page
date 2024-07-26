import { type FC } from 'react'
import Hero from './sections/hero'
import Customers from './sections/customers'
import ModernProductTeams from './sections/modern-product-teams'
import LongTermPlanning from './sections/long-term-planning'
import IssueTracking from './sections/issue-tracking'
import Collaborate from './sections/collaborate'
import Foundation from './sections/foundation'
import PreFooter from './sections/prefooter'

const Home: FC = () => {
	return (
		<main className=' min-h-screen'>
			<Hero />
			<Customers />
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
