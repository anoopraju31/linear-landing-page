import { type FC } from 'react'
import { Button } from '@/components/ui/button'

const Home: FC = () => {
	return (
		<div className='bg-black min-h-screen flex justify-center items-center'>
			<Button className='bg-white'> Click Me </Button>
		</div>
	)
}

export default Home
