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
          className={styles.tram}
          src="/whiteee.gif"
          alt="whiteee"
          width={400}
          height={300}
        />
        <Image
          className={styles.music}
          src="/TRIKK.gif"
          alt="music"
          width={500}
          height={400}
        />
        <Image
          className={styles.clouds}
          src="/clouds.gif"
          alt="clouds"
          width={500}
          height={400}
        />
        <Image
          className={styles.date}
          src="/date.png"
          alt="date"
          width={100}
          height={20}
        />
        <Image
          className={styles.EXAMM}
          src="/EXAMM.png"
          alt="about"
          width={130}
          height={80}
        />
        <Image
          className={styles.about}
          src="/about.png"
          alt="about"
          width={90}
          height={30}
        />
        <Image
          className={styles.schedule}
          src="/schedule.png"
          alt="schedule"
          width={150}
          height={60}
        />
        <Image
          className={styles.contact}
          src="/contact.png"
          alt="contact"
          width={90}
          height={30}
        />

    </div>
  )
}
