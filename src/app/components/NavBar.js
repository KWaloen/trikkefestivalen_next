import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className= {styles.navbar}>
      <div className= {styles.navbarleft}>
  
      </div>

      <div className= {styles.navbarright}>
        <div className = {styles.dropdown}>
        <Image
          className={styles.EXAMM}
          src="/navbar/hamburger.png"
          alt="dropdown"
          width={30}
          height={20}
        />
          <div className = {styles.dropdownmenu}>
            <Link href="/">Hjem</Link>
            <Link href="/artists">Artister & Program</Link>
            <Link href="/events">Billetter & Om Festivalen</Link>
            <Link href="/volunteer">Bli Frivillig!</Link>
            <Link href="/faqs">Ofte stilte spørsmål</Link>
          </div>
      </div>
      </div>
    </div>
  );
}