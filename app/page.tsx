import { type FC } from 'react'
import PreFooter from './sections/prefooter'
import Foundation from './sections/foundation'
import Collaborate from './sections/collaborate'

const Home: FC = () => {
	return (
		<main className=' min-h-screen'>
			<Collaborate />
			<Foundation />
			<PreFooter />
		</main>
	)
}

export default Home
