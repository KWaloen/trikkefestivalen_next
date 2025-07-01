import Link from "next/link";
import Image from 'next/image';
import styles from './subscribe.module.css'

export default function NavBar() {
  return (
    <div className={styles.subscribe}>
        <Image
          className={styles.subscribeElements}
          src="/subscribe/note.png"
          alt="note"
          width={25}
          height={25}
        />

        <Image
          className={styles.subscribeElements}
          src="/subscribe/neverMissOut.png"
          alt="neverMissOut"
          width={400}
          height={40}
        />

        <Image
          className={styles.subscribeElements}
          src="/subscribe/subscribe.png"
          alt="subscribe"
          width={300}
          height={20}
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.subscribeInput}
        />
        <button className={styles.subscribeButton}>
          Sign Up
        </button>

        <Image
          className={styles.subscribeElements}
          src="/subscribe/text.png"
          alt="text"
          width={300}
          height={100}
        />

        <Image
          className={styles.subscribeElements}
          src="/subscribe/notes.png"
          alt="subscribe"
          width={100}
          height={80}
        />


    </div>
  );
}