'use client'

import { type FC } from 'react'
import TabToggleButton from '../tab-toggle-button'
import styles from './styles.module.css'

export type TabHeaders = {
	id: string
	title: string
}

type Props = {
	tabHeaders: TabHeaders[]
	currentTab: string
	changeTab: (id: string) => void
}

const TabHeader: FC<Props> = ({ tabHeaders, changeTab, currentTab }) => {
	return (
		<div className={styles.tab__header}>
			<h3 className={styles.heading}>Ideate and specify what to build next</h3>

			<div className={styles.toggle__header}>
				{tabHeaders.map(({ id, title }) => (
					<TabToggleButton
						key={id}
						isActive={currentTab === id}
						title={title}
						handleClick={() => changeTab(id)}
					/>
				))}
			</div>
		</div>
	)
}

export default TabHeader
