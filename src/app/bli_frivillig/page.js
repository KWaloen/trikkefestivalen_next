
import Image from 'next/image'
import Link from "next/link"
import styles from './bli_frivillig.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.background}>

      <div className={styles.page}>
        <NavBar />
      </div>

      <div className={styles.pageContent}>

        <div className={styles.weArebli_frivilligs}>
          VI ER FRIVILLIGE
        </div>

        <div className={styles.supported}>
          DETTE ARRANGEMENTET ER LAGT TIL RETTE OG STØTTET GJENNOM FRIVILLIG ARBEID
        </div>

        <div className={styles.tramFestival}>
          <p>
          TRIKKEFESTIVALEN ER ET FRIVILLIG INITIATIV HVOR VI ØNSKER Å ARRANGERE EN MUSIKKFESTIVAL PÅ DEN HISTORISKE TRIKKEN SOM GÅR FRA CAFÉ OPERA TIL TEKNISK MUSEUM PÅ MØHLENPRIS
          </p>
          <br />
          <p>
          Vi trenger frivillige til blant annet: <br />
          </p>
          <br/>
          <ul>
            <li>Billetter</li>
            <li> SoMe & Foto</li>
            <li> Lydteknikk </li>
            <li> Arrangementskoordinering</li>
            <li> Annet</li>
          </ul>
        </div>

        <div className={styles.tramFestival}>
          <Link href="https://discord.gg/2Zb9xaUmjU">
          <div>
            Trykk her for å bli med oss på vår Discord-server:
          </div>
            <Image
              src={"/bli_frivillig/Discord-Symbol-Blurple.png"}
              alt="logo"
              width={60}
              height={35}
            />
          </Link>
        <div> Alternativt kan du sende oss en direktemelding på Instagram (@Trikkefestivalen) eller kontakt oss på e-post (trikkfestivalen@gmail.com)</div>
        <br />
      <Footer />
        </div>




      </div>

    </div>

  )
}