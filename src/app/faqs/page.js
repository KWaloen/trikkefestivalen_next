import Head from 'next/head'
import Image from 'next/image'
import styles from './faqs.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (

    
    <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </Head>

        <div className = {styles.blueWaveBackground}>
        <div className={styles.page}>
          <NavBar/> 
            <div className={styles.title}>
                <Image
                  src="/faqs/faqs.png"
                  alt="faqsTitle"
                  width={200}
                  height={50}
                />

                <div>
                    <Image
                      className = {styles.artistNotes}
                      src="/faqs/artistsNotes.png"
                      alt="notes"
                      width={100}
                      height={70}
                    />

                    <Image
                      className = {styles.notesGif}
                      src="/faqs/notesGif.gif"
                      alt="notes"
                      width={800}
                      height={800}
                    />

                    
                </div>  

            </div>
        </div>


        <Image
          className = {styles.blueWave}
          src="/faqs/blueWave.png"
          alt="blueWave"
          width={2000}
          height={60}
        />


        <div className = {styles.pageContent}>

            <div className = {styles.questionGrid}>

                <details className={styles.faqItem}>
                    <summary className = {styles.question}>

                        WHAT IS THE TRAM FESTIVAL?

                    </summary>   
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </details>

                 <details className={styles.faqItem}>
                    <summary className = {styles.question}>

                        WHERE DOES THE FESTIVAL START?

                    </summary>   
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </details>

                 <details className={styles.faqItem}>
                    <summary className = {styles.question}>

                        HOW DO YOU PAY FOR A TICKET?

                    </summary>   
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </details>   

                 <details className={styles.faqItem}>
                    <summary className = {styles.question}>

                        WHOW DO THE TRAM PERFORMANCES WORK?

                    </summary>   
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </details> 

                 <details className={styles.faqItem}>
                    <summary className = {styles.question}>

                        IS THE FESTIVAL QUITABLE FOR CHILDREN AND FAMILIES?

                    </summary>   
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </details>

                 <details className={styles.faqItem}>
                    <summary className = {styles.question}>

                        ARE THERE EVENTS OFF THE TRAMS AS WELL?
                    </summary>   
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </details>

            </div>

            <div className = {styles.image}>
                <Image
                  className = {styles.image}
                  src="/faqs/tram1.png"
                  alt="tram1"
                  width={100}
                  height={100}
                />
            </div>

            <div className = {styles.banner}>
                <Image 
                    src="/artists/musicBanner.png"
                    alt="musikkpaskinner"
                    width={1000}
                    height={50}
                  />
            </div>

            <div className = {styles.imageLast}>
                <Image 
                    src="/artists/musikkpåskinner.png"
                    alt="musikkpaskinner"
                    width={1000}
                    height={50}
                  />
            </div>

        </div>




        <Footer/>
    </div>
</>
  )
}