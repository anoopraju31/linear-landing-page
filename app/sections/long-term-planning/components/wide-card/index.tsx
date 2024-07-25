'use client'

import { useState, type FC } from 'react'
import TabHeader from './tab-header'
import TabBody from './tab-body'
import styles from './styles.module.css'
import { tabHeaders } from '../../feature-lookup-data'

const WideCard: FC = () => {
	const [currentTab, setCurrentTab] = useState<string>(tabHeaders[0].id)
	return (
		<div className={styles.wide__card__tab}>
			<TabHeader
				tabHeaders={tabHeaders}
				currentTab={currentTab}
				changeTab={setCurrentTab}
			/>
			<TabBody currentTab={currentTab} />
		</div>
	)
}

export default WideCard
