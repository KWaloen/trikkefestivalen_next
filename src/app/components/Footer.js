import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.page}>
      
      <div className={styles.images}>
        <Image
          className={styles.logo}
          src="/footer/logo.png"
          alt="logo"
          width={150}
          height={50}
        />

        <Image
          className={styles.logo}
          src="/footer/trikk2.png"
          alt="logo"
          width={150}
          height={100}
        />
      </div>
      
      <div className={styles.footer}>

        <div className={styles.footerleft}>
          <ul className={styles.footerlink}><a href='https://www.trikkefestivalen.no/artister_og_program'>Artister</a></ul>
          <ul className={styles.footerlink}><a href='https://www.trikkefestivalen.no/billetter_og_om_festivalen'>Billetter & Om Festivalen</a></ul>
        </div>

        <div className={styles.footercenter}>
          <ul className={styles.footerlink}><a href='https://www.instagram.com/trikkefestivalen/'>Instagram</a></ul>
          <ul className={styles.footerlink}><a href='https://www.facebook.com/trikkefestivalen'>Facebook</a></ul>
        </div>
        
      
        <div className={styles.footerright}>
          <ul className={styles.footerlink}><a href='https://discord.gg/qw3EeAhK7K'>Discord</a></ul>
          <ul className={styles.footerlink}><a href='mailto:trikkfestivalen@gmail.com'>Kontakt</a></ul>
        </div>
      </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>

                    <Image
                      src="/billetter_og_om_festivalen/Logo-RGB-hoyde-Bergenkommune.png"
                      alt="Bergen Kommune Logo"
                      width={500} // original width
                      height={200} // original height
                      style={{ width: '150px', height: 'auto' }}
                    />
                    <Image
                      src="/billetter_og_om_festivalen/SRIB-grnn-grnn_bakgrunn-01.png"
                      alt="SRIB Logo"
                      width={400} // original width
                      height={400} // original height
                      style={{ width: '100px', height: 'auto' }} // smaller
                    />
                    <div className={styles.img_invert}>
                      <Image
                        src="/billetter_og_om_festivalen/BSTV_Svart_midtstilt.png"
                        alt="BSTV logo"
                        width={600} // original width
                        height={400} // original height
                        style={{ width: '150px', height: 'auto' }} // smaller
                      />
                    </div>
                    <Image
                      src="/billetter_og_om_festivalen/CafeOpera_logo-svart.png"
                      alt="Cafe Opera logo"
                      width={400} // original width
                      height={400} // original height
                      style={{ width: '100px', height: 'auto' }} // smaller
                    />
                    <Image
                      src="/billetter_og_om_festivalen/nobel_bopel_logo.png"
                      alt="Nobel Bopel logo"
                      width={400} // original width
                      height={400} // original height
                      style={{ width: '100px', height: 'auto' }} // smaller
                    />
                  </div>
    </div>
  )
}
