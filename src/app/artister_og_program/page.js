// page.js for Artist (no: "Artister")


import Image from 'next/image'
import styles from './artister_og_program.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetArtist from '../components/GetArtist'

export default async function Home() {

  const scaling_factor = 1.1;


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
            width={4000}
            height={50}
          />
        </div>

        <div className={styles.orangeBackground}>

          <div className={styles.artister_og_programText}>ARTISTER</div>

          <Image
            src="/artister_og_program/artister_og_programNotes.png"
            alt="artister_og_programNotes"
            width={180}
            height={80}
          />


          <GetArtist />


        </div>

        {/*
        <div className={styles.artister_og_programText} style={{ color: '#ed5c10' }}>PROGRAM</div>


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
                <td data-label="Artistnavn">HIN</td>
                <td data-label="Starter hvor">Bergens Tekniske Museum</td>
                <td data-label="Starter når">13:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">SPARKESYKKEL</td>
                <td data-label="Starter hvor">Engen, foran DNS</td>
                <td data-label="Starter når">14:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">EMBLA</td>
                <td data-label="Starter hvor">Bergens Tekniske Museum</td>
                <td data-label="Starter når">15:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">SKANKY</td>
                <td data-label="Starter hvor">Engen, foran DNS</td>
                <td data-label="Starter når">16:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">BEINGAMONKEY</td>
                <td data-label="Starter hvor">Bergens Tekniske Museum</td>
                <td data-label="Starter når">17:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">JULIE GREVE</td>
                <td data-label="Starter hvor">Engen, foran DNS</td>
                <td data-label="Starter når">18:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">RAA DUO</td>
                <td data-label="Starter hvor">Café Opera</td>
                <td data-label="Starter når">19:00</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">KATHY LONG</td>
                <td data-label="Starter hvor">Café Opera</td>
                <td data-label="Starter når">19:30</td>
              </tr>
              <tr>
                <td data-label="Artistnavn">HIN</td>
                <td data-label="Starter hvor">Café Opera</td>
                <td data-label="Starter når">20:00</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className={styles.boxContainer}>
          <Image
            src="/artister_og_program/TrikkefestivalKart.png"
            alt="tram_image"
            width={500*scaling_factor}
            height={600*scaling_factor}
          />
        </div>

        
        <div className={styles.boxContainer}>
          
          <div className={styles.box}>
            Vi har laget en spilleliste med artistene som skal spille på Trikkefestivalen som du kan finne under: <br /><br />

            <div className={styles.playlistBox}>
              <iframe
                src="https://open.spotify.com/embed/playlist/1aPOyUCTREZZSjgk3JHOX0?utm_source=generator"
                width="100%"
                height="352"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Spotify playlist"
              />
            </div>

            <div className={styles.playlistBox}>
              <iframe
                src="https://embed.tidal.com/playlists/7cfccb76-66a4-4d7f-ad69-cbec751ef5c0"
                width="100%"
                height="352"
                allow="encrypted-media; fullscreen; clipboard-write https://embed.tidal.com; web-share"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                style={{ colorScheme: "light dark" }}
                title="TIDAL Embed Player"
              />
            </div>

          */}

      </div>

      <Footer />
      
    </div>

  )
}

