
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
        
      </div>

      <Footer />
    </div>

  )
}