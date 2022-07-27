import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/DataDownload.module.css'


import download from 'public/download.png'
import github from 'public/github.png'
import post from 'public/post.png'

export default function DataDownload () {
  const pdfDownload = './TrabajoFinal.pdf'
  return (
    <div className={styles.downloadpdf}>
      <a className={styles.download} download href={pdfDownload}>
        <Image
          width={24}
          height={24}
          src={download}
          alt='descargar pdf'
        />
        <span className={styles.img}>Descargar Trabajo Final</span>
      </a>
      <a className={styles.download} href='https://github.com/julietaarofrt' target='_blank' rel='nofollow noreferrer'>
          
          <Image
          width={24}
          height={24}
          src={github}
        />
        <span className={styles.img}>Github</span>
        </a>
        <a className={styles.download} href='/Post' target='_blank' rel='nofollow noreferrer'>
          
          <Image
          width={24}
          height={24}
          src={post}
        />
        <span className={styles.img}>Post - Blog Personal</span>
        </a>
    </div>
  )
}