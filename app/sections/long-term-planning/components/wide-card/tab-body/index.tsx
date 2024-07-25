import { type FC } from 'react'
import EditorContent from '@/assets/editor-content.svg'
import styles from './styles.module.css'
import CollaborativeDocsCard from '../collaborative-docs-card'
import InlineComments from '../inline-comments'
import TextToIssueCommands from '../text-to-issuse-commands'

type Props = {
	currentTab: string
}

const TabBody: FC<Props> = ({ currentTab }) => {
	return (
		<div className={styles.tab__body}>
			<div className={styles.tab__body__container}>
				<EditorContent />
				<div className={styles.tab__body__inner__container}>
					{currentTab === 'tab-header-1' && <CollaborativeDocsCard />}
					{currentTab === 'tab-header-2' && <InlineComments />}
					{currentTab === 'tab-header-3' && <TextToIssueCommands />}
				</div>
			</div>
		</div>
	)
}

export default TabBody
