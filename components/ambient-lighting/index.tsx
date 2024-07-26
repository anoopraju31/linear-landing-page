import { type FC } from 'react'
import styles from './styles.module.css'

const AmbientLighting: FC = () => {
	return (
		<div className={styles.ambient__lighting}>
			<div className={styles.container}>
				<div className={styles.light__a} />
				<div className={styles.light__b} />
				<div className={styles.light__c} />
			</div>
		</div>
	)
}

export default AmbientLighting
