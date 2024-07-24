import { type FC } from 'react'
import Accept from '@/assets/accept.svg'
import Copy from '@/assets/copy.svg'
import Decline from '@/assets/decline.svg'
import styles from './styles.module.css'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.menu__item}>
				<Accept />
				<span className={styles.menu__item__text}> Accept </span>
			</div>

			<div className={styles.menu__item}>
				<Copy />
				<span className={styles.menu__item__text}> Mark as duplicate </span>
			</div>

			<div className={styles.menu__item}>
				<Decline />
				<span className={styles.menu__item__text}> Decline </span>
			</div>
		</div>
	)
}

export default Menu
