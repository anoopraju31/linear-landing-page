import type { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
	children: ReactNode
}

const LayoutWrapper: FC<Props> = ({ children }) => {
	return <div className={styles.layout__wrapper}>{children}</div>
}

export default LayoutWrapper
