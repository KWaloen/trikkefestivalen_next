// page.js for Artist (no: "Artister")


import Image from 'next/image'
import styles from './artists.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetArtist from '../components/GetArtist'

export default async function Home() {


  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <NavBar />

        <div className={styles.topRow}>
          <Image
            className={styles.LOGO_CREAM}
            src="/artists/LOGO_CREAM.png"
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
        <div className={styles.experience}>
            <p>
                Mer informasjon om festivalprogrammet kommer snart!
            </p>
        </div>

      </div>

      <Footer />

    </div>
  )
}

