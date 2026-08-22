'use client'

import { useState } from 'react'
import styles from '../billetter_og_om_festivalen/billetter_og_om_festivalen.module.css'

export default function YearTabs({ content2025, content2026 }) {
  const [activeYear, setActiveYear] = useState(2026)

  return (
    <>
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

      {activeYear === 2025 ? content2025 : content2026}
    </>
  )
}
