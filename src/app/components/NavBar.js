import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className= {styles.navbar}>
      <div className= {styles.navbarleft}>
        <Link href="/">
          {" "}
          Home 🏠{" "}
        </Link>
      </div>

      <div className= {styles.navbarright}>
        <div className = {styles.dropdown}>
          <button>🍔</button>
            <div className = {styles.dropdownmenu}>
              <Link href="/ReactProjects/ToDoList"> ✔️ Todo list ✔️</Link>
              <Link href="/ReactProjects/LoginPage">🔑 Login Page 🔒</Link>
              <Link href="/JavaProjects/BugShooter"> 🐜 BugShooter 🐜 </Link>
              <Link href="/JavaProjects/RodentReboot"> 🐀 Rodent Reboot 🐀</Link>
              <Link href="/ReactProjects/Haskell_Is_Hard">Haskell_Is_Hard.AI </Link>
            </div>
        </div>
      </div>
    </div>
  );
}