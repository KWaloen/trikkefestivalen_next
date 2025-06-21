import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <Image
          className={styles.title}
          src="/trikkefestivalenLogo.png"
          alt="title"
          width={600}
          height={250}
        />
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
        <Link href="/artists">
            <Image
              className={styles.EXAMM}
              src="/EXAMM.png"
              alt="artists_image"
              width={150}
              height={90}
            />
        </Link>
        <Link href="/artists">
            <Image
              className={styles.artists}
              src="/artists.png"
              alt="artists_text"
              width={80}
              height={20}
            />
        </Link>
        <Image
          className={styles.ticket}
          src="/ticket.png"
          alt="ticket"
          width={80}
          height={50}
        />
        <Image
          className={styles.events}
          src="/events.png"
          alt="events"
          width={80}
          height={20}
        />
        <Image
          className={styles.letter}
          src="/letter.png"
          alt="letter"
          width={80}
          height={50}
        />
        <Image
          className={styles.faqs}
          src="/faqs.png"
          alt="faqs"
          width={80}
          height={20}
        />
        <Image
          className={styles.notes}
          src="/notes.png"
          alt="notes"
          width={80}
          height={50}
        />
        <Image
          className={styles.volunteer}
          src="/volunteer.png"
          alt="volunteer"
          width={80}
          height={20}
        />

    </div>
  )
}
