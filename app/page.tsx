import { type FC } from 'react'
import PreFooter from './sections/prefooter'
import Foundation from './sections/foundation'

const Home: FC = () => {
	return (
		<main className=' min-h-screen'>
			<div className='h-screen'></div>
			<Foundation />
			<PreFooter />
		</main>
	)
}

export default Home
