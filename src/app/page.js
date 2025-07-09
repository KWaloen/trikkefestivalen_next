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
          src="/main/trikkefestivalenLogo.png"
          alt="title"
          width={600}
          height={250}
        />
        <Image
          className={styles.tram}
          src="/main/trikk.gif"
          alt="trikk"
          width={700}
          height={600}
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
        <Image
          className={styles.date}
          src="/main/date.png"
          alt="date"
          width={300}
          height={50}
        />
    
        
          <div className={styles.linksGrid}>
            <Link href="/artists">
                <Image
                  className={styles.EXAMM}
                  src="/main/EXAMM.png"
                  alt="artists_image"
                  width={150}
                  height={70}
                />
                <Image
                  className={styles.artists}
                  src="/main/artists.png"
                  alt="artists_text"
                  width={80}
                  height={20}
                />
            </Link>
          
            <Link href="/events">
              <Image
                className={styles.ticket}
                src="/main/ticket.png"
                alt="ticket"
                width={80}
                height={50}
              />
              <Image
                className={styles.events}
                src="/main/events.png"
                alt="events"
                width={80}
                height={20}
              />
            </Link>
          
            <Link href="/faqs">
              <Image
                className={styles.letter}
                src="/main/letter.png"
                alt="letter"
                width={80}
                height={50}
              />
              <Image
                className={styles.faqs}
                src="/main/faqs.png"
                alt="faqs"
                width={80}
                height={20}
              />
            </Link>
          
            <Link href="/volunteer">
              <Image
                className={styles.notes}
                src="/main/notes.png"
                alt="notes"
                width={80}
                height={50}
              />
              <Image
                className={styles.volunteer}
                src="/main/volunteer.png"
                alt="volunteer"
                width={80}
                height={20}
              />
            </Link>
          </div>
       

        

    </div>
  )
}
