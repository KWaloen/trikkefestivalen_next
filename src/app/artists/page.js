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
            width={2000}
            height={380}
          />
          
          
          <div className = {styles.gap}/>
      </div>

      <div className = {styles.gap}/>

      <div className = {styles.pageContent}>
        <div>
          <Image
              className={styles.musicBanner}
              src="/artists/musicBanner.png"
              alt="musicBanner"
              width={1000}
              height={70}
            />
        </div>

        <div>
          <Image
            className={styles.tfButton}
            src="/artists/trikkefestivalen-button.png"
            alt="tfButton"
            width={500}
            height={100}
          />
        </div>

        <div>
          <Image
            className={styles.experience}
            src="/artists/experience.png"
            alt="experience"
            width={800}
            height={200}
          />
        </div>
        
      </div>

    <Footer/>
    
    </div>
  )
}
