
import Image from 'next/image'
import Link from "next/link"
import styles from './volunteer.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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

        <div className={styles.tramFestival}>
          <Link href="https://discord.gg/2Zb9xaUmjU">
            <Image
              src={"/volunteer/Discord-Symbol-Blurple.png"}
              alt="logo"
              width={40}
              height={25}
            />
            <div>
              JOIN THE DISCORD
            </div>
          </Link>
        </div>



      </div>

      <Footer />
    </div>

  )
}