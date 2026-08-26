import Image from 'next/image'
import styles from './footer.module.css'
import SponsorLogos from './SponsorLogos'

export default function Footer() {
  return (
    <div className={styles.page}>

      <div className={styles.images}>
        <Image
          className={styles.logo}
          src="/footer/logo.png"
          alt="logo"
          width={150}
          height={50}
        />

        <Image
          className={styles.logo}
          src="/footer/trikk2.png"
          alt="logo"
          width={150}
          height={100}
        />
      </div>

      <div className={styles.footer}>

        <div className={styles.footerleft}>
          <a className={styles.footerlink} href='/artister_og_program'>Artister</a>
          <a className={styles.footerlink} href='/billetter_og_om_festivalen'>Billetter & Om Festivalen</a>
        </div>

        <div className={styles.footercenter}>
          <a className={styles.footerlink} href='https://www.instagram.com/trikkefestivalen/'>Instagram</a>
          <a className={styles.footerlink} href='https://www.facebook.com/trikkefestivalen'>Facebook</a>
        </div>

        <div className={styles.footerright}>
          <a className={styles.footerlink} href='https://discord.gg/qw3EeAhK7K'>Discord</a>
          <a className={styles.footerlink} href='mailto:trikkfestivalen@gmail.com'>Kontakt</a>
        </div>
      </div>
      <div className={styles.logoGrid}>
        <SponsorLogos />
      </div>

    </div>
  )
}
