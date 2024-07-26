import { type FC } from 'react'
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

const CustomerMarquee: FC = () => {
	return (
		<div className={styles.marquee}>
			<div className={styles.marquee__container}>
				<div className={styles.marquee__inner__container}>
					<Logo1 />
					<Logo2 />
					<Logo3 />
					<Logo4 />
					<Logo5 />
					<Logo6 />
					<Logo7 />
					<Logo8 />
					<Logo9 />
					<Logo10 />
					<Logo11 />
					<Logo12 />
					<Logo13 />
					<Logo14 />
					<Logo15 />
					<Logo16 />
					<Logo17 />
					<Logo18 />
				</div>

				<div className={styles.marquee__inner__container}>
					<Logo1 />
					<Logo2 />
					<Logo3 />
					<Logo4 />
					<Logo5 />
					<Logo6 />
					<Logo7 />
					<Logo8 />
					<Logo9 />
					<Logo10 />
					<Logo11 />
					<Logo12 />
					<Logo13 />
					<Logo14 />
					<Logo15 />
					<Logo16 />
					<Logo17 />
					<Logo18 />
				</div>
			</div>
		</div>
	)
}

export default CustomerMarquee
