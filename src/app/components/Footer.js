import Image from 'next/image'
import styles from './footer.module.css'

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
          <ul>About</ul>
          <ul>Event</ul>
        </div>

        <div className={styles.footercenter}>
          <ul>Get Involved</ul>
          <ul>Volunteer</ul>
        </div>
        
      
        <div className={styles.footerright}>
          <ul>Support</ul>
          <ul>Contact us</ul>
        </div>

      </div>
    </div>
  )
}
