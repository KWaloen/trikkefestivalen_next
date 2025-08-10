import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.page}>

      <div className={styles.date}>Lørdag 06.September, 2025</div>

      <Image
        className={styles.title}
        src="/main/trikkefestivalenLogo.png"
        alt="title"
        width={600}
        height={250}
        margin={250}
      />

      <Image
        className={styles.tram}
        src="/main/whiteee.gif"
        alt="whiteee"
        width={700}
        height={600}
      />

      <Image
        className={styles.clouds}
        src="/main/clouds.gif"
        alt="clouds"
        width={800}
        height={700}
      />

      <div className={styles.linksGrid}>
        <Link href="/artists" className={styles.cardLink}>
          <div className={styles.link}>
            <Image
              className={styles.LOGO_CREAM}
              src="/main/LOGO_CREAM.png"
              alt="artists_image"
              width={80}
              height={40}
            />
            <span className={styles.artists}>Artister & Program</span>
          </div>
        </Link>

        <Link href="/events" className={styles.cardLink}>
          <div className={styles.link}>
            <Image
              className={styles.ticket}
              src="/main/ticket.png"
              alt="ticket"
              width={80}
              height={40}
            />
            <span className={styles.events}>Billetter & Om Festivalen</span>
          </div>
        </Link>

        <Link href="/faqs" className={styles.cardLink}>
          <div className={styles.link}>
            <Image
              className={styles.letter}
              src="/main/letter.png"
              alt="letter"
              width={80}
              height={50}
            />
            <span className={styles.faqs}>Ofte Stilte Spørsmål</span>
          </div>
        </Link>

        <Link href="/volunteer" className={styles.cardLink}>
          <div className={styles.link}>
            <Image
              className={styles.notes}
              src="/main/notes.png"
              alt="notes"
              width={80}
              height={50}
            />
            <span className={styles.volunteer}>Bli Frivillig!</span>
          </div>
        </Link>
      </div>

    </div>
  )
}
