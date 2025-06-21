import Image from 'next/image'
import styles from './artists.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
          <NavBar/>

          <Image
          className={styles.EXAMM}
          src="/artists/EXAMM.png"
          alt="tram_image"
          width={250}
          height={150}
          />
          <Image
          className={styles.logo}
          src="/artists/logo.png"
          alt="logo"
          width={400}
          height={100}
          />
          <Image
            className={styles.date}
            src="/artists/date.png"
            alt="date"
            width={300}
            height={50}
          />  
          <Image
            className={styles.year}
            src="/artists/year.png"
            alt="year"
            width={100}
            height={50}
          />  
          <Image
            className={styles.trikk}
            src="/artists/Group.png"
            alt="date"
            width={700}
            height={150}
          /> 
          <Image
            className={styles.wave}
            src="/artists/wave.png"
            alt="wave"
            width={800}
            height={400}
          />  
      </div>

      <div className = {styles.gap}/>

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
