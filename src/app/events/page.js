
import Image from 'next/image'
import styles from './events.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (

        <div className = {styles.background}>

        <div className={styles.page}>
          <NavBar/> 

            <div>
              <div className={styles.title}>
                  <Image
                    src="/events/eventsTitle.png"
                    alt="eventsTitle"
                    width={200}
                    height={25}
                  />               
              </div>

              <div className={styles.sequence}>
                  <Image
                    src="/events/sequence.png"
                    alt="eventsTitle"
                    width={300}
                    height={20}
                  />               
              </div>

              <div className={styles.date}>
                  <Image
                    src="/events/date.png"
                    alt="eventsTitle"
                    width={400}
                    height={25}
                  />               
              </div>

              <div className={styles.getongetoff}>
                  <Image
                    src="/events/getongetoff.png"
                    alt="eventsTitle"
                    width={250}
                    height={20}
                  />               
              </div>
            </div>

            <div className={styles.artists}>
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
                <Image
                  src="/artists/trikk1.png"
                  alt="trikk1"
                  width={180}
                  height={90}
                />
  
                
            </div>

            <div>
              <div className={styles.blackTram}>
                  <Image
                    src="/events/blackTram.gif"
                    alt="blackTram"
                    width={150}
                    height={100}
                  />
              </div>

              <div className={styles.tramText}>
                  <Image
                    src="/events/tramText.png"
                    alt="tramText"
                    width={300}
                    height={30}
                  />                
              </div>
            </div>
            


        </div>

        <Image
          className = {styles.orangeWave}
          src="/events/orangeWave.png"
          alt="orangeWave"
          width={2000}
          height={80}
        />


        
        

        <div className = {styles.pageContent}>

            <Subscribe/>

            <div className = {styles.banner}>
                <Image 
                    src="/artists/musicBanner.png"
                    alt="banner"
                    width={1000}
                    height={50}
                  />
            </div>
            

        </div>




        <Footer/>
    </div>

  )
}