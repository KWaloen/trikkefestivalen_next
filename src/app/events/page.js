import Head from 'next/head'
import Image from 'next/image'
import styles from './events.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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

            <div>
              Artists
            </div>

            
            <div className={styles.blackTram}>
                <Image
                  src="/events/blackTram.gif"
                  alt="blackTram"
                  width={150}
                  height={150}
                />               
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

            


            

        </div>




        <Footer/>
    </div>

  )
}