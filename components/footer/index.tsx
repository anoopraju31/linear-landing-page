import { type FC } from 'react'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaSlack, FaYoutube } from 'react-icons/fa'
import Logo from './logo.svg'
import { footerSections } from '@/lib/constant'
import FooterSection from './footerSection'
import styles from './styles.module.css'

const Footer: FC = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.inner__container}>
				<div className={styles.left__container}>
					<Link className={styles.logo__link} href='/'>
						<span className={styles.logo}>
							<Logo />
						</span>
						<span> Linear </span>
						<span className={styles.hide__mobile}> - Designed Worldwide </span>
					</Link>

					<div className={styles.social__icons}>
						<Link href='#'>
							<FaXTwitter />
						</Link>
						<Link href='#'>
							<FaGithub />
						</Link>

						<Link href='#'>
							<FaSlack />
						</Link>

						<Link href='#'>
							<FaYoutube />
						</Link>
					</div>
				</div>

				{footerSections.map((section, idx) => (
					<FooterSection key={idx} {...section} />
				))}
			</div>
		</footer>
	)
}

export default Footer
