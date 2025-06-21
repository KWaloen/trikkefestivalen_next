import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.page}>
      
      <Image
        className={styles.EXAMM}
        src="/EXAMM.png"
        alt="about_image"
        width={150}
        height={90}
      />
      
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
