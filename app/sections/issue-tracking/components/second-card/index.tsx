import { type FC } from 'react'
import UserCard from '../user-card'
import styles from './styles.module.css'
import { userCards } from '@/lib/constant'

const SecondCard: FC = () => {
	return (
		<div className={styles.second__card}>
			<div className={styles.mask__wrapper}>
				<div className={styles.outter__container}>
					<div className={styles.inner__container}>
						<div className={styles.title}>
							<span> Triage </span>
						</div>

						<div className={styles.card__container}>
							{userCards.map((user) => (
								<UserCard key={user.id} {...user} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondCard
