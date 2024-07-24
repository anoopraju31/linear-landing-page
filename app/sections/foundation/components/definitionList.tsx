import { type FC } from 'react'
import { type FoundationList } from '@/lib/constant'
import styles from '../styles.module.css'

type Props = {
	data: FoundationList
}

const DefinitionList: FC<Props> = ({ data }) => {
	return (
		<dl className={styles.list}>
			{data.map(({ id, label, value }) => (
				<div key={id} className={styles.list__item}>
					<dt className={styles.item__label}> {label} </dt>
					<dd className={styles.item__value}> {value} </dd>
				</div>
			))}
		</dl>
	)
}

export default DefinitionList
