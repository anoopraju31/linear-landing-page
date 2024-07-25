import React, { FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'

const ModernProductTeams: FC = () => {
	return (
		<section className={styles.modern__product__teams}>
			<LayoutWrapper>
				<div className={styles.top__container}>
					<div className={styles.heading}>
						<h2>Made for modern product teams</h2>
					</div>

					<div className={styles.description}>
						<p>
							Linear is shaped by the practices and principles that distinguish
							world-class product teams from the rest: relentless focus, fast
							execution, and a commitment to the quality of craft.
						</p>
					</div>
				</div>
			</LayoutWrapper>
		</section>
	)
}

export default ModernProductTeams
