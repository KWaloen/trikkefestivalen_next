import styles from './billetter_og_om_festivalen.module.css'
import BillettoWidget from '../BillettoButton'
import Image from 'next/image'

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
                        <div className={styles.moreInfo}>
                            Billetter kommer snart!
                        </div>
                    </div>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.getongetoff}>
                            Hva er Trikkefestivalen?
                        </div>
                        <div className={styles.moreInfo}>
                            I 2025 arrangerer vi for første gang Trikkefestivalen, en lokal musikkfestival hvor vi kombinerer den historiske trikken med moderne musikk! Å lokale, unge artister vil i løpet av en dag fremføre musikk mens trikken beveger seg til og fra Café Opera over Høyden til Teknisk Museum på Møhlenpris
                            <br />
                            <br />
                            
                            <div className={styles.getongetoff}>
                                Hvem skal spille?
                            </div>

                            <div className={styles.moreInfo}>
                                Artister blir annonsert snart! 
                                <br /><br />

                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.boxContainer}>
                    <div className={styles.box}>

                        <div className={styles.getongetoff}>
                            Hvem er våre støttepartnere?
                        </div>

                        <div className={styles.moreInfo}>
                            Festivalen drives med støtte fra Sparebanken Norge og Bergen Kommune. Vi har også partnerskap med Bergens Elektriske Sporveier og Bergens Tekniske Museum.
                        </div>
                        <div className={styles.grid}>
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/billetter_og_om_festivalen/2026/Sparebanken-Norge-rod.jpg"
                                alt="Sparebanken Norge Logo"
                                width={500} // original width
                                height={200} // original height
                                style={{ width: '100px', height: 'auto' }}
                            />
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/billetter_og_om_festivalen/2026/Logo-RGB-hoyde-Bergenkommune.png"
                                alt="Sparebanken Norge Logo"
                                width={500} // original width
                                height={200} // original height
                                style={{ width: '100px', height: 'auto' }}
                            />
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/billetter_og_om_festivalen/2026/Bergen_elektriske_sporveis_våpen.svg"
                                alt="Sparebanken Norge Logo"
                                width={500} // original width
                                height={200} // original height
                                style={{ width: '100px', height: 'auto' }}
                            />
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/billetter_og_om_festivalen/2026/BTM-transperent-logo-svart.png"
                                alt="Sparebanken Norge Logo"
                                width={500} // original width
                                height={200} // original height
                                style={{ width: '100px', height: 'auto' }}
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