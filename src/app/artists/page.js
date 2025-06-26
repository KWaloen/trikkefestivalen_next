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

        <div className = {styles.tripleTrikks}>
            <Image
              src="/artists/trikk1.png"
              alt="trikk1"
              width={180}
              height={90}
            />
            <Image
              src="/artists/trikk2.png"
              alt="trikk2"
              width={180}
              height={100}
            />
            <Image
              src="/artists/trikk3.png"
              alt="trikk3"
              width={180}
              height={110}
            />
        </div>

        <div>
          <Image
              className={styles.fifteenMin}
              src="/artists/15min.png"
              alt="15min"
              width={800}
              height={50}
            />
        </div>

        <div>
          <Image
              className={styles.yellow}
              src="/artists/yellow.png"
              alt="yellow"
              width={2000}
              height={50}
            />
        </div>

        <div className = {styles.orangeBackground}>
          
          <div className = {styles.artistsTitle}>
          <Image
                src="/artists/artists.png"
                alt="artistsTitle"
                width={180}
                height={90}
              />

          <Image
                src="/artists/artistsNotes.png"
                alt="artistsNotes"
                width={180}
                height={90}
              />
          </div>
          
          <div className = {styles.artists}>

              <Image
                src="/artists/trikk1.png"
                alt="trikk1"
                width={180}
                height={90}
              />

              <Image
                src="/artists/trikk1.png"
                alt="trikk1"
                width={180}
                height={90}
              />

              <Image
                src="/artists/trikk1.png"
                alt="trikk1"
                width={180}
                height={90}
              />

              <Image
                src="/artists/trikk1.png"
                alt="trikk1"
                width={180}
                height={90}
              />

          </div>

          </div>
            
              <div className={styles.seeArtists}>
                <Image
                    className={styles.ovalArtists}
                    src="/artists/seeArtistText.png"
                    alt="trikk1"
                    width={180}
                    height={30}
                  />
              </div>
          
        <div>
          <Image
              className={styles.yellow}
              src="/artists/yellowFlip.png"
              alt="yellowFlip"
              width={2000}
              height={50}
            />

            
        </div>

      </div>

    <Footer/>
    
    </div>
  )
}
