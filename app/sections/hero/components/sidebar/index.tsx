import React, { FC } from 'react'
import SidebarControls from '@/assets/sidebar-controls.svg'
import SidebarLogo from '@/assets/sidebar-logo.svg'
import SidebarEdit from '@/assets/sidebar-edit.svg'
import InboxMyIssue from '@/assets/inbox-my-issue.svg'
import Workspace from '@/assets/workspace.svg'
import Favourite from '@/assets/favourite.svg'
import Yourspace from '@/assets/your-team.svg'
import OtherTeams from '@/assets/other-teams.svg'
import styles from './styles.module.css'
import IllustrateAnimate from '@/components/illustrate-animate'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.top__container}>
				<IllustrateAnimate
					delay={2.9}
					// duration={3.5}
					className={styles.dot__container}>
					<div />
					<div />
					<div />
				</IllustrateAnimate>
				<IllustrateAnimate
					delay={2.7}
					// duration={3.55}
					className={styles.illustrate__animate}>
					<SidebarControls />
				</IllustrateAnimate>
			</div>

			<div className={styles.sidebar__header__container}>
				<IllustrateAnimate
					delay={2.5}
					// duration={3}
					className={styles.illustrate__animate}>
					<SidebarLogo />
				</IllustrateAnimate>
				<IllustrateAnimate
					// duration={3.6}
					delay={2.3}
					className={styles.illustrate__animate}>
					<SidebarEdit />
				</IllustrateAnimate>
			</div>

			<div className={styles.sidebar__dropdown__outter__container}>
				<IllustrateAnimate
					delay={2.1}
					// duration={3}
					className={styles.illustrate__animate}>
					<InboxMyIssue />
				</IllustrateAnimate>
				<IllustrateAnimate
					delay={1.9}
					// duration={2.8}
					className={styles.illustrate__animate}>
					<Workspace />
				</IllustrateAnimate>
				<IllustrateAnimate
					delay={1.7}
					// duration={2.6}
					className={styles.illustrate__animate}>
					<Favourite />
				</IllustrateAnimate>
				<IllustrateAnimate
					delay={1.5}
					// duration={2.4}
					className={styles.illustrate__animate}>
					<Yourspace />
				</IllustrateAnimate>
				<IllustrateAnimate
					delay={1.3}
					// duration={2.2}
					className={styles.illustrate__animate}>
					<OtherTeams />
				</IllustrateAnimate>
			</div>
		</div>
	)
}

export default Sidebar
