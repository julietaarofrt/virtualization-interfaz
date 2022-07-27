import Logo from 'components/Logo'
import styles from 'styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
      <p className="mx-auto mt-2">2022 &copy; Diseñado y desarrollado por Julieta Aro</p>
      <span className={styles.bull}></span>
        <span className={styles.logo}>
         {/* <Logo width={56} height={56} /> */}
        </span>
      </div>
    </footer>
  )
}
