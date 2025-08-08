import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <div className={styles.page}>

      
      <NavBar />

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
        <Link href="/artists">
          <Image
            className={styles.LOGO_CREAM}
            src="/main/LOGO_CREAM.png"
            alt="artists_image"
            width={150}
            height={70}
          />

          <div className={styles.artists}>Artister og program</div>
        </Link>

        <Link href="/events">
          <Image
            className={styles.ticket}
            src="/main/ticket.png"
            alt="ticket"
            width={80}
            height={50}
          />
          <div className={styles.events}>Billetter & Om Festivalen</div>
        </Link>

        <Link href="/faqs">
          <Image
            className={styles.letter}
            src="/main/letter.png"
            alt="letter"
            width={80}
            height={50}
          />
          <div className={styles.faqs}>Ofte stilte spørsmål</div>
        </Link>

        <Link href="/volunteer">
          <Image
            className={styles.notes}
            src="/main/notes.png"
            alt="notes"
            width={80}
            height={50}
          />
          <div className={styles.volunteer}>Bli frivillig!</div>
        </Link>
      </div>
    </div>
  )
}
