'use client';

import { useState } from 'react';
import Link from "next/link";
import styles from './navbar.module.css'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarright} ${menuOpen ? styles.navbarrightOpen : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Hjem</Link>
        <Link href="/artister_og_program" onClick={() => setMenuOpen(false)}>Artister & Program</Link>
        <Link href="/billetter_og_om_festivalen" onClick={() => setMenuOpen(false)}>Billetter & Om Festivalen</Link>
        <Link href="/bli_frivillig" onClick={() => setMenuOpen(false)}>Bli Frivillig!</Link>
        <Link href="/ofte_stilte_spm" onClick={() => setMenuOpen(false)}>Ofte Stilte Spørsmål</Link>
      </div>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
