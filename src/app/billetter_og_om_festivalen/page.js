'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './billetter_og_om_festivalen.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Artists2025 from '../components/History/2025'
import Artists2026 from '../components/History/2026'

export default function Home() {
  const [activeYear, setActiveYear] = useState(2026)

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

        <div className={styles.yearTabs}>
          <button
            className={`${styles.yearTab} ${activeYear === 2025 ? styles.yearTabActive : ''}`}
            onClick={() => setActiveYear(2025)}
          >
            2025
          </button>
          <button
            className={`${styles.yearTab} ${activeYear === 2026 ? styles.yearTabActive : ''}`}
            onClick={() => setActiveYear(2026)}
          >
            2026
          </button>
        </div>

        {activeYear === 2025 && <Artists2025 />}
        {activeYear === 2026 && <Artists2026 />}

      </div>

      <Footer />
    </div>

  )
}