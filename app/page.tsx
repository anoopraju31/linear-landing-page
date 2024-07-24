import { type FC } from 'react'
import PreFooter from './sections/prefooter'
import Foundation from './sections/foundation'
import Collaborate from './sections/collaborate'
import IssueTracking from './sections/issue-tracking'

const Home: FC = () => {
	return (
		<main className=' min-h-screen'>
			<IssueTracking />
			<Collaborate />
			<Foundation />
			<PreFooter />
		</main>
	)
}

export default Home
