import Image from 'next/image'
import styles from './artists.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetArtist from '../components/GetArtist'

export default async function Home() {


  return (
    <div>
      <div className={styles.page}>
        <NavBar />

        <div className={styles.topRow}>
          <Image
            className={styles.EXAMM}
            src="/artists/EXAMM.png"
            alt="tram_image"
            width={100}
            height={100}
          />
          <Image
            className={styles.logo}
            src="/artists/logo.png"
            alt="logo"
            width={200}
            height={100}
          />
        </div>


      </div>

      <div className={styles.pageContent}>



        <div className={styles.experience}>Opplev musikk på den historiske trikken gjennom Bergen gater</div>
        
        <div className={styles.tripleTrikks}>
          <Image className={styles.singleTrikk}
            src="/artists/trikk1.png"
            alt="trikk1"
            width={180}
            height={90}
          />
          <Image className={styles.singleTrikk}
            src="/artists/trikk2.png"
            alt="trikk2"
            width={180}
            height={100}
          />
          <Image className={styles.singleTrikk}
            src="/artists/trikk3.png"
            alt="trikk3"
            width={180}
            height={110}
          />
        </div>


        <div>
          <Image
            className={styles.yellow}
            src="/artists/yellow.png"
            alt="yellow"
            width={2000}
            height={50}
          />
        </div>

        <div className={styles.orangeBackground}>

          <div className={styles.artistsTitle}>

            <div className={styles.artistsText}>ARTISTER</div>

            <Image
              src="/artists/artistsNotes.png"
              alt="artistsNotes"
              width={180}
              height={80}
            />
          </div>

          <GetArtist />

        </div>


      </div>

      <Footer />

    </div>
  )
}

