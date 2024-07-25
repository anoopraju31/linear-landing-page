import { type FC } from 'react'
import EditorContent from '@/assets/editor-content.svg'
import styles from './styles.module.css'
import CollaborativeDocsCard from '../collaborative-docs-card'

type Props = {
	currentTab: string
}

const TabBody: FC<Props> = ({ currentTab }) => {
	return (
		<div className={styles.tab__body}>
			<div className={styles.tab__body__container}>
				<EditorContent />
				<div className={styles.tab__body__inner__container}>
					<CollaborativeDocsCard />
				</div>
			</div>
		</div>
	)
}

export default TabBody
