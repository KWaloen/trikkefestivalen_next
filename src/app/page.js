import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
        <Image
          className={styles.tram}
          src="/trikk.gif"
          alt="trikk"
          width={700}
          height={600}
        />
        <Image
          className={styles.tram}
          src="/whiteee.gif"
          alt="whiteee"
          width={700}
          height={600}
        />
        <Image
          className={styles.music}
          src="/TRIKK.gif"
          alt="music"
          width={700}
          height={600}
        />
        <Image
          className={styles.clouds}
          src="/clouds.gif"
          alt="clouds"
          width={800}
          height={700}
        />
        <Image
          className={styles.date}
          src="/date.png"
          alt="date"
          width={300}
          height={50}
        />
        <Image
          className={styles.EXAMM}
          src="/EXAMM.png"
          alt="about_image"
          width={150}
          height={90}
        />
        <Image
          className={styles.about}
          src="/about.png"
          alt="about"
          width={120}
          height={50}
        />
        <Image
          className={styles.schedule}
          src="/schedule.png"
          alt="schedule"
          width={180}
          height={120}
        />
        <Image
          className={styles.contact}
          src="/contact.png"
          alt="contact"
          width={120}
          height={50}
        />

    </div>
  )
}
