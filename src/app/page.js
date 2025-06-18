import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
        <Image
          className={styles.tram}
          src="/trikk.gif"
          alt="trikk"
          width={400}
          height={300}
        />
        <Image
          className={styles.music}
          src="/TRIKK.gif"
          alt="music"
          width={400}
          height={300}
        />
    </div>
  )
}
