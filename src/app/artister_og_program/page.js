// page.js for Artist (no: "Artister")


import Image from 'next/image'
import styles from './artister_og_program.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetArtist from '../components/GetArtist'

export default async function Home() {


  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <NavBar />

        <div className={styles.topRow}>
          <Image
            className={styles.LOGO_CREAM}
            src="/artister_og_program/LOGO_CREAM.png"
            alt="tram_image"
            width={100}
            height={100}
          />
          <Image
            className={styles.logo}
            src="/artister_og_program/logo.png"
            alt="logo"
            width={200}
            height={100}
          />
        </div>


      </div>

      <div className={styles.pageContent}>

        <div className={styles.experience}>Opplev musikk på den historiske trikken gjennom Bergen gater</div>

        <div>
          <Image
            className={styles.yellow}
            src="/artister_og_program/yellow.png"
            alt="yellow"
            width={2000}
            height={50}
          />
        </div>

        <div className={styles.orangeBackground}>

          <div className={styles.artister_og_programTitle}>

            <div className={styles.artister_og_programText}>ARTISTER</div>

            <Image
              src="/artister_og_program/artister_og_programNotes.png"
              alt="artister_og_programNotes"
              width={180}
              height={80}
            />
          </div>

          <GetArtist />

      
        </div>
        <div className={styles.artister_og_programText}style={{ color: '#ed5c10' }}>PROGRAM</div>


        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Artistnavn</th>
                <th>Konserten starter hvor:</th>
                <th>Konserten starter når:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HIN</td>
                <td>Bergens Tekniske Museum</td>
                <td>13:00</td>
              </tr>
              <tr>
                <td>SPARKESYKKEL</td>
                <td>Engen, foran DNS</td>
                <td>14:00</td>
              </tr>
              <tr>
                <td>EMBLA</td>
                <td>Bergens Tekniske Museum</td>
                <td>15:00</td>
              </tr>
              <tr>
                <td>SKANKY</td>
                <td>Engen, foran DNS</td>
                <td>16:00</td>
              </tr>
              <tr>
                <td>BEINGAMONKEY</td>
                <td>Bergens Tekniske Museum</td>
                <td>17:00</td>
              </tr>
              <tr>
                <td>JULIE GREVE</td>
                <td>Engen, foran DNS</td>
                <td>18:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      <div className={styles.boxContainer}>
          <div className={styles.artister_og_programText}style={{ color: '#ed5c10', textAlign: 'center' , fontSize: '30px'}}>
            GRATISKONSERT PÅ CAFÉ OPERA
          </div>
          <div className={styles.box}>
            Raa Duo, Kathy Long og Hin spiller en ekstra, gratis konsert på Café Opera klokken 19:00. <br /><br />
            Vi får også et foredrag om den historiske trikken fra Carl Harbitz-Rasmussen, som er styreleder for Bergen Elektriske Sporvei. 
          </div>
      </div>

      </div>

      <Footer />

    </div>
  )
}

