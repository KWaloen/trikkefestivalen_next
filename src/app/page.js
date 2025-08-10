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
        <Link href="/artister_og_program">
          <Image
            className={styles.LOGO_CREAM}
            src="/main/LOGO_CREAM.png"
            alt="artister_og_program_image"
            width={150}
            height={70}
          />

          <div className={styles.artister_og_program}>Artister & Program</div>
        </Link>

        <Link href="/billetter_og_program">
          <Image
            className={styles.ticket}
            src="/main/ticket.png"
            alt="ticket"
            width={80}
            height={50}
          />
          <div className={styles.billetter_og_program}>Billetter & Om Festivalen</div>
        </Link>

        <Link href="/ofte_stilte_spm">
          <Image
            className={styles.letter}
            src="/main/letter.png"
            alt="letter"
            width={80}
            height={50}
          />
          <div className={styles.ofte_stilte_spm}>Ofte Stilte Spørsmål</div>
        </Link>

        <Link href="/bli_frivillig">
          <Image
            className={styles.notes}
            src="/main/notes.png"
            alt="notes"
            width={80}
            height={50}
          />
          <div className={styles.bli_frivillig}>Bli Frivillig!</div>
        </Link>
      </div>
    </div>
  )
}
