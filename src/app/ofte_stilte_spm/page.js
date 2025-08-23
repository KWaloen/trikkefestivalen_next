// page.js for ofte_stilte_spm (no: "Ofte Stilte Spørsmål")


import Image from 'next/image'
import styles from './ofte_stilte_spm.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className={styles.blueWaveBackground}>
            <div className={styles.page}>
                <NavBar />
                <div className={styles.title}>
                    <p>OFTE STILTE <br /> SPØRSMÅL </p>

                    <div>
                        <Image
                            className={styles.artistNotes}
                            src="/ofte_stilte_spm/artistsNotes.png"
                            alt="notes"
                            width={120}
                            height={80}
                        />

                        <Image
                            className={styles.notesGif}
                            src="/ofte_stilte_spm/notesGif.gif"
                            alt="notes"
                            width={800}
                            height={800}
                        />
                    <br />
                    <br />

                    </div>

                </div>
            </div>

            <div className={styles.pageContent}>

                <div className={styles.questionGrid}>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hva er Trikkefestivalen?

                        </summary>
                        <div className={styles.answer}>
                            I år (2025) arrangerer vi for første gang Trikkefestivalen, en lokal musikkfestival hvor vi kombinerer den historiske trikken med moderne musikk!
                            Seks lokale, unge artister vil i løpet av en dag fremføre musikk mens trikken beveger seg til og fra Café Opera over Høyden til Teknisk museum på Møhlenpris
                            <br />
                            <br />
                            Festivalen drives med støtte fra Bergen Kommune og Studenradioen i Bergen. Vi har også partnerskap med <a href="https://besporvei.net/">Bergen Elektriske Sporvei</a>, som drifter trikken og <a href="https://cafeopera.org/">Café Opera</a> og <a href="https://nobelbopel.no/">Nobel Bopel</a>.
                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hvor møter jeg opp?

                        </summary>
                        <div className={styles.answer}>
                            Har du kjøpt billett og vil se en eller flere artister er det lurt å sjekke programmet for å finne ut hvor konserten starter. <br /> <br />
                            Én konsert gjelder for en enkelt trikkereise. <br /> <br />
                            Det kan derfor være at du må møte opp ved Bergens Tekniske Museum på Møhlenpris eller ved Café Opera ved Den Nationale Scene.
                            Sjekk gjerne kartet (kommer snart) på nettsiden vår for å se hvor du skal møte opp. Ha klar billetten din før du skal ombord trikken.

                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hva slags fordeler er det med billetten?

                        </summary>
                        <div className={styles.answer}>
                            Billetten gir deg en enkeltgangs rabatt på mat og drikke på Café Opera og rabatt på drikke hos Nobel Bopel.I tillegg til å få en unik konsertopplevelse på trikken, får du også gratis transport fra Engen til Møhlenpris og tilbake igjen.
                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hvor starter festivalen?

                        </summary>
                        <div className={styles.answer}>
                            Festivalen starter og ender hvor trikken vanligivis starter og ender, nemlig på Engen (foran DNS, i nærheten av Café Opera) eller foran Bergens Tekniske Museum på Møhlenpris. Sjekk programmet vårt for mer informasjon om hvilken strekning artist spiller.
                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hvor mye vil en billett koste?

                        </summary>
                        <div className={styles.answer}>
                            Billetter koster 90 kr per konsert, som tilsvarer enten en strekning fra Engen til Møhlenpris eller <i>vice versa.</i>
                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hvordan betaler man for en billett?

                        </summary>
                        <div className={styles.answer}>
                            Billetter kan kjøpes på nettsiden vår på forhånd (sjekk <a href="https://trikkefestivalen.no/billetter_og_om_festivalen/">her</a>) eller foran trikken før hver konsert. Du kan betale med kort eller Vipps.
                        </div>
                    </details>


                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Hvordan fungerer festivalen? Er ikke trikken veldig liten?

                        </summary>
                        <div className={styles.answer}>
                            Svaret er ja; trikken er veldig liten.
                            Det vil si at det vil være begrenset plass til både publikum og artister. Vi anbefaler derfor å både kjøpe billett tidlig eller komme tidlig for å sikre seg plass, og å være forberedt på en intim konsertopplevelse.
                        </div>
                    </details>
                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Kan jeg ta med drikke og mat med ombord trikken?

                        </summary>
                        <div className={styles.answer}>
                            Dessverre nei. Det er lite plass på trikken, og vi ønsker å skape en hyggelig atmosfære for alle våre gjester. Det er ikke noe problem å ha med en vannflaske, men andre drikker. Du er hjertelig velkommen til å kjøpe og spise mat og drikke på Café Opera og Nobel Bopel før og etter konsertene.

                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Er festivalen barnevennlig? Kan jeg ta med hund eller andre kjæledyr?
                        </summary>
                        <div className={styles.answer}>
                            Ja, festivalen er barnevennlig! Vi oppfordrer familier til å ta med barna sine for en morsom og minneverdig opplevelse. Barn under 12 år kan delta gratis i følge med en betalende voksen. <br />
                            <br />

                            Grunnet trikkens begrensede plass, må alle barn ha en billett for å delta.
                            Vi anbefaler at barn under 12 år sitter på fanget til en voksen.
                            Det er dessverre ikke mulig å ta med kjæledyr.
                        </div>
                    </details>

                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Er festivalen tilgjengelig for personer med nedsatt funksjonsevne?
                        </summary>
                        <div className={styles.answer}>
                            Vi holder på å utrede dette. Hvis du har spesifikke behov eller spørsmål, vennligst ta kontakt med oss på <a href='mailto:trikkfestivalen@gmail.com'>trikkfestivalen@gmail.com</a>, så skal vi gjøre vårt beste for å imøtekomme dem.
                        </div>
                    </details>


                    <details className={styles.ofte_stilte_spmItem}>
                        <summary className={styles.question}>

                            Jeg har spørsmål om festivalen, hvordan kan jeg kontakte dere?
                        </summary>
                        <div className={styles.answer}>
                            Du kan kontakte oss på <a href='mailto:trikkfestivalen@gmail.com'>trikkfestivalen@gmail.com</a> for spørsmål om festivalen.
                        </div>
                    </details>
                </div>
            </div>
            <Footer />
        </div>

    )
}