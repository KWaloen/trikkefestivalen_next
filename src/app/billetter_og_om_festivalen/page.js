import Image from 'next/image'
import styles from './billetter_og_om_festivalen.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Artists2025 from '../components/History/2025'
import Artists2026 from '../components/History/2026'
import YearTabs from '../components/YearTabs'

export default function Home() {
  return (

    <div className={styles.background}>

      <NavBar />
      <div className={styles.page}>


        <div>
          <div className={styles.title}>
            BILLETTER & OM FESTIVALEN
          </div>

          <div className={styles.sequence}>
            30 MINUTT LANGE KONSERTOPPLEVELSER PÅ DEN HISTORISKE TRIKKEN
          </div>

          <div className={styles.getongetoff}>
            HOPP PÅ, NYT MUSIKKEN OG HOPP AV
          </div>
        </div>


        <div className={styles.blackTram}>
          <Image
            src="/billetter_og_om_festivalen/blackTram.gif"
            alt="blackTram"
            width={150}
            height={100}
          />
        </div>

        <YearTabs content2025={<Artists2025 />} content2026={<Artists2026 />} />

      </div>

      <Footer />
    </div>

  )
}
