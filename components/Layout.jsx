import Head from 'next/head'
import styles from 'styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout ({
  children,
  title = 'Virtualización',
  description = 'Julieta Aro'
}) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>{title} | Julieta Aro</title>
        <link rel='icon' href='icono.png' />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:locale' content='es-ES' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
