
import Image from 'next/image'
import styles from './volunteer.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
        <div className = {styles.background}>

        <div className={styles.page}>
            <NavBar/> 

            <Image 
                className={styles.concert}
                src="/volunteer/concert.png"
                alt="concert"
                width={1000}
                height={50}
            />

            <Image 
                className={styles.volunteerText}
                src="/volunteer/volunteerText.png"
                alt="volunteer"
                width={1000}
                height={50}
            />
        </div>
            
        <div className = {styles.pageContent}>

            <Image 
                className={styles.volunteerImages}
                src="/volunteer/wearevolunteers.png"
                alt="wearevolunteers"
                width={900}
                height={50}
            />

            <Image 
                className={styles.volunteerImages}
                src="/volunteer/supported.png"
                alt="support"
                width={800}
                height={50}
            />

            <Image 
                className={styles.volunteerImages}
                src="/volunteer/text.png"
                alt="text"
                width={700}
                height={50}
            />

            <Image
                className={styles.oval}
                src="/volunteer/becomeavolunteer.png"
                alt="becomeavolunteer"
                width={200}
                height={30}
              />

            <div className={styles.imageGrid}>
                <Image
                    className={styles.trikk}
                    src="/volunteer/blackTram.gif"
                    alt="trikk"
                    width={150}
                    height={100}
                />

                <Image
                    className={styles.trikk}
                    src="/volunteer/tram1.png"
                    alt="tram1"
                    width={100}
                    height={100}
                />
            </div>

            <Image
                className={styles.volunteerImages}
                src="/volunteer/musikkpåskinner.png"
                alt="banner"
                width={800}
                height={30}
              />

            <Image
               className={styles.volunteerImages}
               src="/volunteer/note.png"
               alt="note"
               width={600}
               height={30}
             />
    </div>

    <div className= {styles.images}>
        <Image
            className={styles.banner}
            src="/volunteer/banner.png"
            alt="banner"
            width={2000}
            height={100}
        />

        <Image
            className={styles.tramShed}
            src="/volunteer/tramShed.png"
            alt="banner"
            width={1000}
            height={100}
        />


        <Image
            className={styles.banner}
            src="/volunteer/bannerend.png"
            alt="banner"
            width={2000}
            height={100}
        />

        <Image
          className={styles.volunteerImages}
          src="/volunteer/musikkpåskinner.png"
          alt="banner"
          width={800}
          height={30}
        />

        <Image
          className={styles.volunteerImages}
          src="/volunteer/musicBanner.png"
          alt="banner"
          width={800}
          height={30}
        />

        <Image
          className={styles.volunteerImages}
          src="/volunteer/roles.png"
          alt="banner"
          width={800}
          height={30}
        />

        <Image
          className={styles.volunteerImages}
          src="/volunteer/apply.png"
          alt="banner"
          width={800}
          height={30}
        />

        <Image
                className={styles.oval}
                src="/volunteer/becomeavolunteer.png"
                alt="becomeavolunteer"
                width={200}
                height={30}
              />
    </div>

        <Subscribe/>

        <Footer/>
    </div>

  )
}