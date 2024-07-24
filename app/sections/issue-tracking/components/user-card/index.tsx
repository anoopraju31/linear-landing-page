import { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

export type UserCardProps = {
	id: string
	title: string
	img: string
	name: string
}

const UserCard: FC<UserCardProps> = ({ id, title, img, name }) => {
	return (
		<div id={id} className={styles.user__card}>
			<div className={styles.user__card__container}>
				<span className={styles.user__card__title}>{title}</span>

				<div className={styles.user__card__inner__container}>
					<div className={styles.user__card__img}>
						<Image src={img} alt='' width={20} height={20} />
					</div>
					<span className={styles.user__card__name}> {name} </span>
				</div>
			</div>
		</div>
	)
}

export default UserCard
