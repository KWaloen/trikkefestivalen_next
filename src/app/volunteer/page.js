
import Image from 'next/image'
import styles from './volunteer.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <div className={styles.background}>

      <div className={styles.page}>
        <NavBar />

        <Image
          className={styles.concert}
          src="/volunteer/concert.png"
          alt="concert"
          width={1000}
          height={50}
        />

        <div className={styles.volunteerText}>
          VOLUNTEERS
        </div>
      </div>

      <div className={styles.pageContent}>

        <div className={styles.weAreVolunteers}>
          WE ARE VOLUNTEERS
        </div>

        <div className={styles.supported}>
          THIS EVENT IS CREATED AND SUPPORTED THROUGH VOLUNTEER WORK
        </div>

        <div className={styles.tramFestival}>
          THE TRAM FESTIVAL IS A VOLUNTARY INITIATIVE WHERE WE WANT TO HOLD A MUSIC FESTIVAL ON THE HISTORIC TRAM THAT RUNS FROM CAFE OPERA TO THE TECHNICAL MUSEUM AT MØHLENPRIS
        </div>

        <div className={styles.oval}>
          BECOME A VOLUNTEER
        </div>

        <div className={styles.imageGrid}>
          <Image
            className={styles.trikk}
            src="/volunteer/blackTram.gif"
            alt="trikk"
            width={150}
            height={100}
          />

          <Image
            className={styles.trikk}
            src="/volunteer/tram1.png"
            alt="tram1"
            width={100}
            height={100}
          />
        </div>

        <Image
          className={styles.volunteerImages}
          src="/volunteer/musikkpåskinner.png"
          alt="banner"
          width={800}
          height={30}
        />

        <div className={styles.age}>
          NOTE: YOU MUST BE 18 YEARS OR OLDER TO VOLUNTEER
        </div>

      </div>

      <div className={styles.images}>
        <Image
          className={styles.banner}
          src="/volunteer/banner.png"
          alt="banner"
          width={2000}
          height={100}
        />

        <Image
          className={styles.tramShed}
          src="/volunteer/tramShed.png"
          alt="banner"
          width={1000}
          height={100}
        />


        <Image
          className={styles.banner}
          src="/volunteer/bannerend.png"
          alt="banner"
          width={2000}
          height={100}
        />

        <Image
          className={styles.volunteerImages}
          src="/volunteer/musikkpåskinner.png"
          alt="banner"
          width={800}
          height={30}
        />

        <Image
          className={styles.volunteerImages}
          src="/volunteer/musicBanner.png"
          alt="banner"
          width={800}
          height={30}
        />

        <div className={styles.roles}>
          WE ARE MADE UP OF DIFFERENT GROUPS COVERING DIFFERENT AREAS NEEDED WITHIN THE FESTIVAL
        </div>

        <div className={styles.apply}>
          APPLY NOW AND HELP MAKE THIS YEAR'S TRAM MUSIC FESTIVAL THE MOST EPIC ONE YET! SPOTS FILL UP QUICKLY, SO HOP ABOARD TODAY!
        </div>

        <div className={styles.oval}>
          BECOME A VOLUNTEER
        </div>
      </div>

      <Subscribe />

      <Footer />
    </div>

  )
}