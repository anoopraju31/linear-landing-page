'use client'

import { useEffect, useState, type FC } from 'react'
import GridCell from './grid-cell'
import Logo1 from '@/assets/logo-1.svg'
import Logo2 from '@/assets/logo-2.svg'
import Logo3 from '@/assets/logo-3.svg'
import Logo4 from '@/assets/logo-4.svg'
import Logo5 from '@/assets/logo-5.svg'
import Logo6 from '@/assets/logo-6.svg'
import Logo7 from '@/assets/logo-7.svg'
import Logo8 from '@/assets/logo-8.svg'
import Logo9 from '@/assets/logo-9.svg'
import Logo10 from '@/assets/logo-10.svg'
import Logo11 from '@/assets/logo-11.svg'
import Logo12 from '@/assets/logo-12.svg'
import Logo13 from '@/assets/logo-13.svg'
import Logo14 from '@/assets/logo-14.svg'
import Logo15 from '@/assets/logo-15.svg'
import Logo16 from '@/assets/logo-16.svg'
import Logo17 from '@/assets/logo-17.svg'
import Logo18 from '@/assets/logo-18.svg'
import styles from './styles.module.css'

const CustomerList: FC = () => {
	const [layer, setLayer] = useState<number>(1)

	useEffect(() => {
		const changeLayer = () => setLayer((prev) => (prev % 3) + 1)
		const interval = setInterval(changeLayer, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.customer__grid}>
			<div className={styles.logo__grid}>
				<GridCell
					layer={layer}
					icon1={<Logo1 />}
					icon2={<Logo2 />}
					icon3={<Logo3 />}
				/>
				<GridCell
					layer={layer}
					icon1={<Logo4 />}
					icon2={<Logo5 />}
					icon3={<Logo6 />}
				/>
				<GridCell
					layer={layer}
					icon1={<Logo7 />}
					icon2={<Logo8 />}
					icon3={<Logo9 />}
				/>
				<GridCell
					layer={layer}
					icon1={<Logo10 />}
					icon2={<Logo11 />}
					icon3={<Logo12 />}
				/>
				<GridCell
					layer={layer}
					icon1={<Logo13 />}
					icon2={<Logo14 />}
					icon3={<Logo15 />}
				/>
				<GridCell
					layer={layer}
					icon1={<Logo16 />}
					icon2={<Logo17 />}
					icon3={<Logo18 />}
				/>
			</div>
		</div>
	)
}

export default CustomerList
