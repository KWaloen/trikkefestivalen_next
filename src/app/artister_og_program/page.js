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
        <div className={styles.experience}>
            <p>
                Mer informasjon om festivalprogrammet kommer snart!
            </p>
        </div>

        {/*
        <div className={styles.table}>
          <table border="1" cellPadding="80" cellSpacing="100">
            <thead>
              <tr>
                <th>Artist name</th>
                <th>Time</th>
                <th>Concert start</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artist 1</td>
                <td>12:00</td>
                <td>12:15</td>
              </tr>
              <tr>
                <td>Artist 2</td>
                <td>12:30</td>
                <td>12:45</td>
              </tr>
              <tr>
                <td>Artist 3</td>
                <td>13:00</td>
                <td>13:15</td>
              </tr>
              <tr>
                <td>Artist 4</td>
                <td>13:30</td>
                <td>13:45</td>
              </tr>
              <tr>
                <td>Artist 5</td>
                <td>14:00</td>
                <td>14:15</td>
              </tr>
              <tr>
                <td>Artist 6</td>
                <td>14:30</td>
                <td>14:45</td>
              </tr>
              <tr>
                <td>Artist 7</td>
                <td>15:00</td>
                <td>15:15</td>
              </tr>
            </tbody>
          </table>
        </div>
        */}
      </div>

      <Footer />

    </div>
  )
}

