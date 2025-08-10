// page.js for ofte_stilte_spm (no: "Ofte Stilte Spørsmål")


import Head from 'next/head'
import Image from 'next/image'
import styles from './ofte_stilte_spm.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (

    
    <>
        <div className = {styles.blueWaveBackground}>
        <div className={styles.page}>
          <NavBar/> 
            <div className={styles.title}>
                <Image
                  src="/ofte_stilte_spm/ofte_stilte_spm.png"
                  alt="faqsTitle"
                  width={200}
                  height={50}
                />

                <div>
                    <Image
                      className = {styles.artistNotes}
                      src="/ofte_stilte_spm/artistsNotes.png"
                      alt="notes"
                      width={100}
                      height={70}
                    />

                    <Image
                      className = {styles.notesGif}
                      src="/ofte_stilte_spm/notesGif.gif"
                      alt="notes"
                      width={800}
                      height={800}
                    />

                    
                </div>  

            </div>
        </div>

        <div className = {styles.pageContent}>

            <div className = {styles.questionGrid}>

                <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

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
                    <summary className = {styles.question}>

                        Hvor møter jeg opp?

                    </summary>   
                    <div className={styles.answer}>
                        Har du kjøpt billett og vil se en eller flere artister er det lurt å sjekke programmet for å finne ut hvor konserten starter. 
                        Én konsert gjelder for en enkelt trikkereise. 
                        Det kan derfor være at du må møte opp ved Tekniske Museum på Møhlenpris eller ved Café Opera ved Den Nationale Scene. 
                        Sjekk gjerne kartet (kommer snart) på nettsiden vår for å se hvor du skal møte opp. Ha klar billetten din før du skal ombord trikken.

                    </div>
                </details>

                 <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Hva slags fordeler er det med billetten?

                    </summary>   
                    <div className={styles.answer}>
                        Billetten gir deg en enkeltgangs rabatt på mat og drikke på Café Opera og Nobel Bopel, samt en gratis trikketur til og fra festivalen. I tillegg til å få en unik konsertopplevelse på trikken, får du også gratis transport fra Engen til Møhlenpris og tilbake igjen.
                    </div>
                </details>

                                 <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Hvor starter festivalen?

                    </summary>   
                    <div className={styles.answer}>
                        Festivalen starter og ender hvor trikken vanligivis starter og ender, nemlig på Engen (foran DNS, i nærheten av Café Opera) eller foran Teknisk Museum på Møhlenpris. Sjekk programmet vårt for mer informasjon om hvilken strekning artist spiller. 
                    </div>
                </details>

                <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Hvor mye vil en billett koste?

                    </summary>   
                    <div className={styles.answer}>
                        Vi jobber med å finne en løsning for billettpriser. Hold øynene åpne for mer informasjon!
                    </div>
                </details>   

                 <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Hvordan betaler man for billett?

                    </summary>   
                    <div className={styles.answer}>
                        Billetter kan kjøpes på nettsiden vår på forhånd eller foran trikken før hver konsert. Vi holder på å fikse en løsning for dette, så hold øynene åpne for mer informasjon!
                    </div>
                </details>   


                 <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Hvordan fungerer festivalen? Er ikke trikken veldig liten?

                    </summary>   
                    <div className={styles.answer}>
                        Svaret er ja; trikken er veldig liten. 
                        Det vil si at det vil være begrenset plass til både publikum og artister. Vi anbefaler derfor å både kjøpe billett tidlig eller komme tidlig for å sikre seg plass, og å være forberedt på en intim konsertopplevelse.
                    </div>
                </details> 
                                 <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Kan jeg ta med drikke og mat med ombord trikken?

                    </summary>   
                    <div className={styles.answer}>
                        Dessverre nei. Det er lite plass på trikken, og vi ønsker å skape en hyggelig atmosfære for alle våre gjester. Det er ikke noe problem å ha med en vannflaske, men andre drikker. Du er hjertelig velkommen til å kjøpe og spise mat og drikke på Café Opera og Nobel Bopel før og etter konsertene.
                        
                    </div>
                </details>   

                 <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

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
                    <summary className = {styles.question}>

                        Er festivalen tilgjengelig for personer med nedsatt funksjonsevne?
                    </summary>   
                    <div className={styles.answer}>
                        Vi holder på å utrede dette. Hvis du har spesifikke behov eller spørsmål, vennligst ta kontakt med oss på trikkfestivalen@gmail.com, så skal vi gjøre vårt beste for å imøtekomme dem.
                    </div>
                </details>


                <details className={styles.ofte_stilte_spmItem}>
                    <summary className = {styles.question}>

                        Jeg har spørsmål om festivalen, hvordan kan jeg kontakte dere?
                    </summary>   
                    <div className={styles.answer}>
                        Du kan kontakte oss på trikkfestivalen@gmail.com for spørsmål om festivalen. 
                    </div>
                </details>

            </div>


        </div>




        <Footer/>
    </div>
</>
  )
}