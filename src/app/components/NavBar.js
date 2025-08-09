import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      
      <div className={styles.navbarright}>
        <Link href="/">Home</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/events">Events</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/faqs">FAQS</Link>
      </div>
    </div>
  );
}
