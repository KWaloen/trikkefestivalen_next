import styles from './billetter_og_om_festivalen.module.css'
import BillettoWidget from '../BillettoButton'
import SponsorLogos from '../SponsorLogos'

const scaling_factor = 1.1;

export default function Artists() {

    return (
        <div>
            <div className={styles.tramText}>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.getongetoff}>
                            BILLETTER
                        </div>
                        <script src="https://billetto.no/widget.js"></script>
                        <billetto-organiser-widget type="list" organiser="6502409" organization="billetto.no" lang="no" theme="light" color="#ed5c10" button-style="medium" font-family="Tahoma, Geneva, sans-serif" background-color="#ffffff" show-event-description></billetto-organiser-widget>
                        <div className={styles.moreInfo}>
                            Billetter kjøpes på billetto.no og kan betales med kort eller Vipps. Det anbefales å kjøpe billetter på forhånd for å sikre plass. Sjekk ut programmet for mer informasjon om tidspunktene og startplass for konsertene.
                        </div>
                    </div>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.getongetoff}>
                            Hva er Trikkefestivalen?
                        </div>
                        <div className={styles.moreInfo}>
                            I 2026 arrangerer vi Trikkefestivalen for andre gang, en lokal musikkfestival hvor vi kombinerer den historiske trikken med moderne musikk! Seks lokale, unge artister vil i løpet av en dag fremføre musikk mens trikken beveger seg til og fra Engen over Høyden til Teknisk Museum på Møhlenpris
                            <br />
                            <br />

                            <div className={styles.getongetoff}>
                                Hvem skal spille?
                            </div>

                            <div className={styles.moreInfo}>

                                I år har vi seks lokale Bergensartister som skal spille på trikken. Sjekk ut spillelistene på Spotify og Tidal under for å få en smakebit av hva som er i vente

                                <br /><br />

                                <div className={styles.playlistBox}>
                                    <iframe
                                        src="https://open.spotify.com/embed/playlist/0tybwllKDNXbxAEujVEun4?utm_source=generator&si=0d19ffdb9b73459c"
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
                                        src="https://embed.tidal.com/playlists/f7b4262b-63a2-483c-a14e-9bfe17200b6b"
                                        width="100%"
                                        height="352"
                                        allow="encrypted-media; fullscreen; clipboard-write https://embed.tidal.com; web-share"
                                        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                                        style={{ colorScheme: "light dark" }}
                                        title="TIDAL Embed Player"
                                    />
                                </div>

                                <div className={styles.playlistBox}>
                                  <iframe
                                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                                    frameBorder="0"
                                    height="450"
                                    style={{
                                      width: "100%",
                                      overflow: "hidden",
                                      borderRadius: "10px",
                                    }}
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                    src="https://embed.music.apple.com/ie/playlist/trikkefestivalen-2026/pl.u-xlyNEmNsK8B3v9"
                                    title="Trikkefestivalen 2026 Playlist"
                                  />
                                </div>



                                <br /><br />


                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div className={styles.box}>
                    <div className={styles.getongetoff}>
                        Praktisk informasjon
                        <div className={styles.moreInfo}>
                            Konsertene starter på to forskjellige lokasjoner. Sørg for at du møter opp til riktig tid og riktig sted for at du skal få rekke å få med deg konserten.


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
                                            <td>TBA</td>
                                            <td>Bergens Tekniske Museum</td>
                                            <td>13:00</td>
                                        </tr>
                                        <tr>
                                            <td>MARXIZ</td>
                                            <td>Engen, foran DNS</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>MATHIAS LANGELAND</td>
                                            <td>Bergens Tekniske Museum</td>
                                            <td>15:00</td>
                                        </tr>
                                        <tr>
                                            <td>BERGLJOT</td>
                                            <td>Engen, foran DNS</td>
                                            <td>16:00</td>
                                        </tr>
                                        <tr>
                                            <td>PAPA PAUL</td>
                                            <td>Bergens Tekniske Museum</td>
                                            <td>17:00</td>
                                        </tr>
                                        <tr>
                                            <td>MISS WEDNESDAY</td>
                                            <td>Engen, foran DNS</td>
                                            <td>18:00</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            Konsertene starter og ender på Engen, foran DNS og Bergens Tekniske Museum.
                        </div>
                    </div>

                </div>


                <div className={styles.boxContainer}>
                    <div className={styles.box}>

                        <div className={styles.getongetoff}>
                            Hvem er våre støttepartnere?
                        </div>

                        <div className={styles.moreInfo}>
                            Festivalen drives med støtte fra Sparebanken Norge, Bergen Kommune og Obos. Vi har også partnerskap med <a href="https://www.besporvei.net/">Bergens Elektriske Sporveier</a> og <a href="https://bergenstekniskemuseum.no/">Bergens Tekniske Museum</a>, samt støtte fra <a href="https://www.d-production.no/">D-Productions</a>, <a href="https://www.bergenkaffebrenneri.no/">Bergen Kaffebrenneri</a>, <a href="https://https://draumstudio.no/">Draum Studio</a> og <a href="https://www.livesupply.no/">Live Supply</a>
                        </div>
                        <div className={styles.grid}>
                            <SponsorLogos />
                        </div>
                    </div>
                </div>


                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.getongetoff}>
                            Om denne nettsiden & Anerkjennelser
                        </div>
                        <div className={styles.moreInfo}>
                            Den grafiske profilingen av Trikkefestivalen og trikkefestivalen.no er laget av Henriette Nådland (IG: <a href="https://www.instagram.com/studionaad/">@studionaad</a>, webside: <a href="https://www.studionaad.com">www.studionaad.com</a>), og nettsiden er utviklet av Kai Waløen (<a href="https://www.kwal.no">www.kwal.no</a>), med bidrag fra Robin Garen Aaberg, Malin Bjørkli, Anne Hognaland og Illimar Rekand.
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
                            Om du skulle ønske å komme i kontakt med oss, kan du sende en e-post til <a href="mailto:trikkfestivalen@gmail.com">trikkfestivalen@gmail.com</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}