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
            <div className={styles.sequence}>
              VI STARTER MED CAFÉ OPERA PÅ ENGEN OG AVSLUTTER MED TEKNISK MUSEUM PÅ MØHLENPRIS
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