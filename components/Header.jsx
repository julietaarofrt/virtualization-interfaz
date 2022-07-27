import Link from 'next/link'
import styles from 'styles/Header.module.css'
import Logo from 'components/Logo'
import Image from 'next/image'
import icono from 'public/icono.png'

export default function Navbar () {
  return (
    <>
      <nav className={styles.navbar} role='navigation' aria-label='main navigation'>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLeft}>
            <Link href='/'>
              <a className={styles.navLogo} title='Julieta Aro'>
                {/* <Logo width={75} height={75} /> */}
                <Image
                src={icono}
                alt='icono'
                width={100}
                height={100}
                loading='eager'
                placeholder='blur'
              />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
