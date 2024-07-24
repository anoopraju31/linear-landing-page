import { type FC } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import LayoutWrapper from '@/components/layout-wrapper'

const PreFooter: FC = () => {
	return (
		<section className={styles.prefooter}>
			<LayoutWrapper>
				<div className={styles.grid__container}>
					<div className=''>
						<h3 className={styles.heading}>
							Plan the present.
							<br />
							Build the future.
						</h3>
					</div>

					<div className={styles.links__outter__container}>
						<div className={styles.links__inner__container}>
							<Link className={styles.get__started__link} href='/'>
								{' '}
								Get Started{' '}
							</Link>
							<Link className={styles.talk__to__sales} href='/'>
								{' '}
								Talk to sales{' '}
							</Link>
						</div>
					</div>
				</div>
			</LayoutWrapper>
		</section>
	)
}

export default PreFooter
