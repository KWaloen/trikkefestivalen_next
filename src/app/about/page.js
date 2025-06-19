import Image from 'next/image'
import styles from './about.module.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
            <div className={styles.page}>
                <NavBar/>

            </div>
    </div>
  )
}
