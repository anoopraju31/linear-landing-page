import { type FC } from 'react'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import styles from './styles.module.css'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__blur__mask}></div>
			<div className={styles.header__overlay}></div>
			<header className={styles.header__wrapper}>
				<nav className={styles.header__root}>
					<div className='relative'>
						<ul className={styles.header__list}>
							<li className={cn(styles.header__logo, styles.header__item)}>
								<Link href='/' className={styles.header__logo__link}>
									<Logo />
								</Link>
							</li>

							<li className={cn(styles.hide__mobile, styles.header__trigger)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Features{' '}
								</Link>
							</li>

							<li className={cn(styles.hide__laptop, styles.header__item)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Method{' '}
								</Link>
							</li>

							<li className={cn(styles.hide__laptop, styles.header__item)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Customers{' '}
								</Link>
							</li>

							<li className={cn(styles.hide__tablet, styles.header__item)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Changelog{' '}
								</Link>
							</li>

							<li className={cn(styles.hide__mobile, styles.header__item)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Pricing{' '}
								</Link>
							</li>

							<li className={cn(styles.hide__mobile, styles.header__trigger)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Company{' '}
								</Link>
							</li>

							<li className={cn(styles.hide__tablet, styles.header__item)}>
								<Link className={styles.header__link} href='#'>
									{' '}
									Contact{' '}
								</Link>
							</li>

							<li
								className={cn(
									styles.header__item,
									styles.header__button,
									styles.header__login,
								)}>
								<Link
									className={cn(styles.header__link, styles.button__login)}
									href='#'>
									{' '}
									Log in <kbd className={styles.header__kbd}> L </kbd>
								</Link>
							</li>

							<li
								className={cn(
									styles.header__item,
									styles.header__button,
									styles.header__signup,
								)}>
								<Link
									className={cn(styles.header__link, styles.button__signup)}
									href='#'>
									{' '}
									Sign up
								</Link>
							</li>

							<li
								className={cn(
									styles.header__item,
									styles.header__button,
									styles.header__menu,
								)}>
								<button>
									<Menu />
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header
