// page.js for Events (no: "Billett & Om Festivalen")

import Image from 'next/image'
import styles from './events.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import GetArtist from '../components/GetArtist'

export default function Home() {
  return (

    <div className={styles.background}>

      <div className={styles.page}>
        <NavBar />

        <div>
          <div className={styles.title}>
            BILLETTER & OM FESTIVALEN
          </div>

          <div className={styles.sequence}>
            15 MINUTT LANGE KONSERTOPPLEVELSER PÅ DEN HISTORISKE TRIKKEN
          </div>

          <div className={styles.getongetoff}>
            HOPP PÅ, NYT MUSIKKEN OG HOPP AV
          </div>
        </div>

        <div>
          <div className={styles.blackTram}>
            <Image
              src="/events/blackTram.gif"
              alt="blackTram"
              width={150}
              height={100}
            />
          </div>

          <div className={styles.tramText}>
            <div className={styles.boxContainer}>
            <div className={styles.box}>
            <div className={styles.getongetoff}>
              BILLETTINFORMASJON
            </div>
              På denne siden kommer informasjon om hvordan man kjøper billetter, samt praktisk informasjon om festivalen.
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
              <div className={styles.getongetoff}>
                Hva er Trikkefestivalen?
              </div>
              I år (2025) arrangerer vi for første gang Trikkefestivalen, en lokal musikkfestival hvor vi kombinerer den historiske trikken med moderne musikk! Seks lokale, unge artister vil i løpet av en dag fremføre musikk mens trikken beveger seg til og fra Café Opera over Høyden til Teknisk Museum på Møhlenpris
              <br />
              <br />
              Festivalen drives med støtte fra Bergen Kommune og Studenradioen i Bergen. Vi har også partnerskap med Bergen Elektriske Sporvei, som drifter trikken og Café Opera og Nobel Bopel.
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>

    {// Commenteted out code for Subscribe component, might want this later
    }
    {/*
      // <div className={styles.pageContent}>
      // <Subscribe />
      // </div>
    */
    }
      <Footer />
    </div>

  )
}