import Image from 'next/image'
import styles from './artists.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetArtist from '../components/GetArtist'

export default async function Home() {


  return (
    <div>
      <div className={styles.page}>
          <NavBar/>

        <div className={styles.topRow}>
          <Image
            className={styles.EXAMM}
            src="/artists/EXAMM.png"
            alt="tram_image"
            width={100}
            height={100}
          />
          <Image
            className={styles.logo}
            src="/artists/logo.png"
            alt="logo"
            width={200}
            height={100}
          />
        </div>
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

        <div className={styles.experience}>EXPERIENCE MUSIC WHILE TRAVELING ON THE HISTORIC TRAM THROUGH THE STREETS OF BERGEN</div>

        <div className = {styles.tripleTrikks}>
            <Image className={styles.singleTrikk}
              src="/artists/trikk1.png"
              alt="trikk1"
              width={180}
              height={90}
            />
            <Image className={styles.singleTrikk}
              src="/artists/trikk2.png"
              alt="trikk2"
              width={180}
              height={100}
            />
            <Image className={styles.singleTrikk}
              src="/artists/trikk3.png"
              alt="trikk3"
              width={180}
              height={110}
            />
        </div>

        <div className={styles.fifteenMin}>15 MINUTES OF BORDERLESS MUSIC</div>

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
          
          <div className={styles.artistsText}>ARTISTS</div>

          <Image
                src="/artists/artistsNotes.png"
                alt="artistsNotes"
                width={180}
                height={80}
              />
          </div>
            
              <GetArtist/>
          
          </div>
            
              <div className={styles.seeArtists}>
                <div className={styles.oval}>SEE ALL ARTISTS</div>
              </div>
          
        <div>
          <Image
              className={`${styles.yellow} ${styles.yellowTop}`}
              src="/artists/yellowWave.png"
              alt="yellowFlip"
              width={2000}
              height={40}
            />

          <div className={styles.tramAndDate}>
            <Image
                className={styles.tramPic}
                src="/artists/tramPic.png"
                alt="tramPic"
                width={800}
                height={0} /*dictated by css style */
              />
            
          </div>

          <Image
              className={`${styles.yellow} ${styles.yellowBottom}`}
              src="/artists/yellowWave.png"
              alt="yellow"
              width={2000}
              height={40}
            />

        </div>

        <div className={styles.orangeBackground}>

          <div className = {styles.tripleTrams}>
            <Image
              src="/artists/tram1.png"
              alt="tram1"
              width={80}
              height={90}
            />
            <Image
              src="/artists/notes.png"
              alt="notes"
              width={120}
              height={90}
            />
            <Image
              src="/artists/tram2.png"
              alt="tram2"
              width={130}
              height={90}
            />
          </div>

          <div className = {styles.gap}/>

          <div>
          <Image 
              src="/artists/musikkpåskinner.png"
              alt="musikkpaskinner"
              width={1000}
              height={50}
            />
          </div>

        </div>

        <div>
          <Image
              className={styles.wavyOrange}
              src="/artists/wavyOrange.png"
              alt="yellow"
              width={2000}
              height={50}
            />
        </div>

        <div className={styles.moreInfo}>

              <Image
                className={styles.photo}
                src="/artists/singer.png"
                alt="singer"
                width={250}
                height={0}
              />
              
              <div className={styles.volunteer}>

                <div className={styles.volunteerTitle}>BECOME A VOLUNTEER!</div>

                <div className={styles.volunteerText}>THE FESTIVAL IS MADE POSSIBLE THROUGH VOLUNTEER WORK AND PARTNERSHIPS WITH LOCAL BUSINESSES</div>

                <div className={styles.readMore}>READ MORE</div>

                <Image
                  className={styles.photo}
                  src="/artists/yellowLine.png"
                  alt="readMoreLine"
                  width={150}
                  height={100}
                />

              </div>

              <Image
                className={styles.photo}
                src="/artists/tramShed.png"
                alt="singer"
                width={280}
                height={0}
              />

              <div className={styles.fromEngen}>

                <div className={styles.volunteerTitle}>FROM ENGEN TO MØHLENPRIS</div>

                <div className={styles.volunteerText}>THE TRAM FESTIVAL IS A VOLUNTARY INITIATIVE WHERE WE WANT TO HOLD A MUSIC FESTIVAL ON THE HISTORIC TRAM THAT RUNS FROM CAFE OPERA TO THE TECHNICAL MUSEUM AT MØHLENPRIS</div>

                <div className={styles.readMore}>READ MORE</div>

                <Image
                  className={styles.photo}
                  src="/artists/yellowLine.png"
                  alt="readMoreLine"
                  width={150}
                  height={100}
                />

              </div>
              
        </div>


        <div className={styles.endBanners}>
          <Image
            className={styles.photo}
            src="/artists/musicBanner.png"
            alt="musicBanner"
            width={1000}
            height={70}
          />
        </div>

        <div className={styles.endBanners}>
          <Image
            className={styles.photo}
            src="/artists/musikkpåskinner.png"
            alt="musikkpaskinner"
            width={1000}
            height={50}
          />
        </div>
      </div>

      <div className={styles.blueWave}>
        <Image
          src="/artists/blue.png"
          alt="blue"
          width={2000}
          height={50}
        />
      </div>

    <Footer/>
    
    </div>
  )
}

