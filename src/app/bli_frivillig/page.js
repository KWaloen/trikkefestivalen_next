
import Image from 'next/image'
import Link from "next/link"
import styles from './bli_frivillig.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.background}>

      <NavBar />

      <div className={styles.page}>

        <div className={styles.bli_frivillig}>
          VI ER FRIVILLIGE
        </div>

        <div className={styles.supported}>
          DETTE ARRANGEMENTET ER LAGT TIL RETTE OG STØTTET GJENNOM FRIVILLIG ARBEID
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            Trikkefestivalen er et frivillig initiativ hvor vi ønsker å arrangere en musikkfestival på den historiske trikken som går fra Café Opera til Teknisk Museum på Møhlenpris
            <br />
            <br />
            Vi trenger frivillige til blant annet: <br />
            <br />
            <ul>
              <li>Billetter</li>
              <li> SoMe & Foto</li>
              <li> Lydteknikk </li>
              <li> Arrangementskoordinering</li>
              <li> Websideutvikling</li>
              <li> +++ </li>
            </ul>
          </div>

          <div className={styles.box}>
            <Link href="https://discord.gg/2Zb9xaUmjU">
              <div>
                Trykk her for å bli med oss på vår Discord-server:
                <br />
                <br />
              </div>
              <Image
                src={"/volunteer/Discord-Symbol-Blurple.png"}
                alt="logo"
                width={55}
                height={35}
              />
            </Link>

            <div> Alternativt kan du sende oss en direktemelding på Instagram (@Trikkefestivalen) eller kontakt oss på e-post (trikkfestivalen@gmail.com)</div>
            <br />

          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}