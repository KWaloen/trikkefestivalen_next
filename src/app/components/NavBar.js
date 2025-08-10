import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      
      <div className={styles.navbarright}>
        <Link href="/">Hjem</Link>
        <Link href="/artister_og_program">Artister & Program</Link>
        <Link href="/billetter_og_program">Billetter & Om Festivalen</Link>
        <Link href="/bli_frivillig">Bli Frivillig!</Link>
        <Link href="/ofte_stilte_spm">Ofte Stilte Spørsmål</Link>
      </div>
    </div>
  );
}
