// page.js for billetter_og_om_festivalen (no: "Billett & Om Festivalen")

import Image from 'next/image'
import styles from './billetter_og_om_festivalen.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Script from 'next/script'

export default function Home() {
  return (

    <div className={styles.background}>
      {/* Load the Billetto widget script on the client */}
      <Script src="https://billetto.no/widget.js" strategy="afterInteractive" />

      <NavBar />
      <div className={styles.page}>


        <div>
          <div className={styles.title}>
            BILLETTER & OM FESTIVALEN
          </div>

          <div className={styles.sequence}>
            30 MINUTT LANGE KONSERTOPPLEVELSER PÅ DEN HISTORISKE TRIKKEN
          </div>

          <div className={styles.getongetoff}>
            HOPP PÅ, NYT MUSIKKEN OG HOPP AV
          </div>
        </div>


        <div className={styles.blackTram}>
          <Image
            src="/billetter_og_om_festivalen/blackTram.gif"
            alt="blackTram"
            width={150}
            height={100}
          />
        </div>
        <div>
          <div className={styles.tramText}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.getongetoff}>
                  BILLETTER
                </div>
                <div className={styles.moreInfo}>
                          <div className={styles.boxContainer}>
          <div className={styles.box}>
            <billetto-widget
              type="event"
              event="1522099"
              organization="billetto.no"
              lang="no"
              theme="light"
              color="#ed5c10"
              button-style="rounded"
              font-family='"Trebuchet MS", sans-serif'
              whitelabel hide-banners
              background-color="white"
            />
          </div>

          Billetter kan betales med kort eller Vipps. Det anbefales å kjøpe billetter på forhånd for å sikre plass.
          Sjekk ut programmet for mer informasjon om tidspunktene og startplass for konsertene.
          
        
        </div>
                </div>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.getongetoff}>
                  Hva er Trikkefestivalen?
                </div>
                <div className={styles.moreInfo}>
                  I år (2025) arrangerer vi for første gang Trikkefestivalen, en lokal musikkfestival hvor vi kombinerer den historiske trikken med moderne musikk! Seks lokale, unge artister vil i løpet av en dag fremføre musikk mens trikken beveger seg til og fra Café Opera over Høyden til Teknisk Museum på Møhlenpris
                  <br />
                  <br />
                  Festivalen blir planlagt og koordinert av Janina Wildermuth og Illimar Rekand etter et ønske om å lage en festival som kombinerer det historiske med det moderne, og som kan gi unge artister en scene for å vise frem sitt talent i musikkbyen Bergen.
                  <br />
                  <br />
                  <div className={styles.getongetoff}>
                    Hvem er våre støttepartnere?
                  </div>

                  <div className={styles.moreInfo}>
                    Festivalen drives med støtte fra Bergen Kommune og Studentradioen i Bergen. Vi har også partnerskap med Bergen Elektriske Sporvei. Nobel Bopel og Café Opera tilbyr med rabatt til innehavere av billetter til Trikkefestivalen, og sistnevnte stiller også med lokaler for konserter. Bergen Student-TV bistår med utlån av utstyr.
                  </div>
                </div>
                <div className={styles.grid}>
                  <Image
                    loading="lazy"
                    decoding="async"
                    src="/billetter_og_om_festivalen/Logo-RGB-hoyde-Bergenkommune.png"
                    alt="Bergen Kommune Logo"
                    width={500} // original width
                    height={200} // original height
                    style={{ width: '100px', height: 'auto' }}
                  />
                  <Image
                    loading="lazy"
                    decoding="async"
                    src="/billetter_og_om_festivalen/SRIB-grnn-grnn_bakgrunn-01-smaller.png"
                    alt="SRIB Logo"
                    width={400} // original width
                    height={400} // original height
                    style={{ width: '100px', height: 'auto' }} // smaller
                  />
                  <div className={styles.img_invert}>
                    <Image
                      loading="lazy"
                      decoding="async"
                      src="/billetter_og_om_festivalen/BSTV_Svart_midtstilt.png"
                      alt="BSTV logo"
                      width={600} // original width
                      height={400} // original height
                      style={{ width: '200px', height: 'auto' }} // smaller
                    />
                  </div>
                  <Image
                    loading="lazy"
                    decoding="async"
                    src="/billetter_og_om_festivalen/CafeOpera_logo-svart.png"
                    alt="Cafe Opera logo"
                    width={400} // original width
                    height={400} // original height
                    style={{ width: '100px', height: 'auto' }} // smaller
                  />
                  <Image
                    loading="lazy"
                    decoding="async"
                    src="/billetter_og_om_festivalen/nobel_bopel_logo.png"
                    alt="Nobel Bopel logo"
                    width={400} // original width
                    height={400} // original height
                    style={{ width: '100px', height: 'auto' }} // smaller
                  />
                </div>
              </div>

            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.getongetoff}>
                  Om denne nettsiden & Anerkjennelser
                </div>
                <div className={styles.moreInfo}>
                  Den grafiske profilingen av Trikkefestivalen og trikkefestivalen.no er laget av Henriette Nådland (IG: <a href="https://www.instagram.com/studionaad/">@studionaad</a>, webside: <a href="https://www.studionaad.com">www.studionaad.com</a>), og nettsiden er utviklet av Kai Waløen (<a href="www.kwal.no">www.kwal.no</a>), med bidrag fra Robin Garen Aaberg, Malin Bjørkli, Anne Hognaland og Illimar Rekand.
                  <br />
                  <br />
                  Denne nettsiden er laget med Next.js og React. Den er åpen kildekode og lisensiert under en MIT-lisens og kan finnes på <a href="https://github.com/KWaloen/trikkefestivalen_next">https://github.com/KWaloen/trikkefestivalen_next</a>. Vi setter pris på bidrag gjennom Pull Requests!
                </div>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.getongetoff}>
                  Kontakt
                </div>
                <div className={styles.moreInfo}>
                  Om du skulle ønske å komme i kontakt med oss, kan du sende en e-post til <a href="mailto:trikkfestivalen@gmail.com">trikkfestivalen@gmail.com</a>, <a href="mailto:janina.wildermuth@uib.no">janina.wildermuth@uib.no</a> eller  <a href="mailto:illimar.rekand@gmail.com">illimar.rekand@gmail.com</a>.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {// Commenteted out code for Subscribe component, might want this later
      }
      {/*
      // <div className={styles.pageContent}>
      // <Subscribe />
      // </div>
    */
      }
      <Footer />
    </div>

  )
}