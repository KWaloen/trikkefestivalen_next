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
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/events">Events</Link>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="/faqs">FAQS</Link>
          </div>
      </div>
      </div>
    </div>
  );
}