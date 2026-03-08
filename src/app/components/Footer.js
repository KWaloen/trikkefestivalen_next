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
          <a className={styles.footerlink} href='/artister_og_program'>Artister</a>
          <a className={styles.footerlink} href='/billetter_og_om_festivalen'>Billetter & Om Festivalen</a>
        </div>

        <div className={styles.footercenter}>
          <a className={styles.footerlink} href='https://www.instagram.com/trikkefestivalen/'>Instagram</a>
          <a className={styles.footerlink} href='https://www.facebook.com/trikkefestivalen'>Facebook</a>
        </div>

        <div className={styles.footerright}>
          <a className={styles.footerlink} href='https://discord.gg/qw3EeAhK7K'>Discord</a>
          <a className={styles.footerlink} href='mailto:trikkfestivalen@gmail.com'>Kontakt</a>
        </div>
      </div>
      <div className={styles.logoGrid}>
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/Logo-RGB-hoyde-Bergenkommune.png"
          alt="Bergen Kommune Logo"
          width={500}
          height={200}
          style={{ width: '150px', height: 'auto' }}
        />
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/SRIB-grnn-grnn_bakgrunn-01-smaller.png"
          alt="SRIB Logo"
          width={400}
          height={400}
          style={{ width: '100px', height: 'auto' }}
        />
        <div className={styles.img_invert}>
          <Image
            loading="lazy"
            decoding="async"
            src="/billetter_og_om_festivalen/BSTV_Svart_midtstilt.png"
            alt="BSTV logo"
            width={600}
            height={400}
            style={{ width: '150px', height: 'auto' }}
          />
        </div>
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/CafeOpera_logo-svart.png"
          alt="Cafe Opera logo"
          width={400}
          height={400}
          style={{ width: '100px', height: 'auto' }}
        />
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/nobel_bopel_logo.png"
          alt="Nobel Bopel logo"
          width={400}
          height={400}
          style={{ width: '100px', height: 'auto' }}
        />
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/draumstudiologo.png"
          alt="Draum Studio logo"
          width={400}
          height={400}
          style={{ width: '100px', height: 'auto' }}
        />
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/d-production_logo.png"
          alt="D-Production logo"
          width={400}
          height={400}
          style={{ width: '100px', height: 'auto' }}
        />
        <Image
          loading="lazy"
          decoding="async"
          src="/billetter_og_om_festivalen/livesupply.png"
          alt="Livesupply logo"
          width={400}
          height={400}
          style={{ width: '100px', height: 'auto' }}
        />
      </div>

    </div>
  )
}
