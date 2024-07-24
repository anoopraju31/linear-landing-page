import { ReactNode, type FC } from 'react'
import styles from './index.module.css'

type Props = {
	children: ReactNode
}

export const BentoGrid: FC<Props> = ({ children }) => {
	return <div className={styles.bento__grid}>{children}</div>
}

export const BentoGridTopLayer: FC<Props> = ({ children }) => {
	return <div className={styles.top__container}>{children}</div>
}

export const BentoGridWideCardWrapper: FC<Props> = ({ children }) => {
	return <div className={styles.wide__card__wrapper}> {children} </div>
}

export const BentoGridSeperator: FC = () => {
	return <div className={styles.bento__grid__seperator} />
}
