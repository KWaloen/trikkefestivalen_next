
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
            EVENTS
          </div>

          <div className={styles.sequence}>
            15 MINUTE CONCERT SEQUENCES
          </div>

          <div className={styles.getongetoff}>
            GET ON, ENJOY MUSIC, GET OFF
          </div>
        </div>

        <div className={styles.artists}>

          <GetArtist />

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
              WE START BY CAFE OPERA AND FOLLOW THE TRAM TO MØHLENPRIS
            </div>
          </div>
        </div>



      </div>

      <Image
        className={styles.orangeWave}
        src="/events/orangeWave.png"
        alt="orangeWave"
        width={2000}
        height={80}
      />





      <div className={styles.pageContent}>

        <Subscribe />

        <div className={styles.banner}>
          <Image
            src="/artists/musicBanner.png"
            alt="banner"
            width={1000}
            height={50}
          />
        </div>


      </div>




      <Footer />
    </div>

  )
}