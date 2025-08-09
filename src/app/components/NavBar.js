import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      
      <div className={styles.navbarright}>
        <Link href="/">Hjemside</Link>
        <Link href="/artists">Artister & Program</Link>
        <Link href="/events">Billetter & Om Festivalen</Link>
        <Link href="/volunteer">Bli Frivillig!</Link>
        <Link href="/faqs">Ofte Stilte Spørsmål</Link>
      </div>
    </div>
  );
}
