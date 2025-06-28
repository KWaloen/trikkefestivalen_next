import Head from 'next/head'
import Image from 'next/image'
import styles from './events.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (

        <div className = {styles.blueWaveBackground}>
        <div className={styles.page}>
          <NavBar/> 
            <div className={styles.title}>
                

                

            </div>
        </div>


        


        <div className = {styles.pageContent}>

            


            

        </div>




        <Footer/>
    </div>

  )
}