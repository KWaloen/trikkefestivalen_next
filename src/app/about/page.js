import Image from 'next/image'
import styles from './about.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
          <NavBar/>

          <Image
          className={styles.EXAMM}
          src="/EXAMM.png"
          alt="about_image"
          width={300}
          height={170}
          />

          <Image
            className={styles.date}
            src="/date.png"
            alt="date"
            width={300}
            height={50}
          />  
      </div>
      <div className = {styles.pageContent}>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
        <div>PAGE CONTENT</div>
      </div>

    <Footer/>
    
    </div>
  )
}
