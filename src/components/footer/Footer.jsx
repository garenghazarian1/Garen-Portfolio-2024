import Image from "next/image"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <>
        <div className={styles.socialLinks}>     
            <a className={styles.infoA} href="/GAREN-CV-FIRST-PAGE-18-05-2024.pdf" target="_blank">
              <p>
              Download Resume
              </p>
              
              <div >
                <p className={styles.imageContainer}>
                PDF
                </p>
              
              </div>
            </a>
            <a className={styles.infoA} href="https://www.linkedin.com/in/garen-ghazarian-1692812a5/" target="_blank">LinkedIn</a>
            <a className={styles.infoA} href="https://github.com/garenghazarian1" target="_blank">GitHub</a>
        </div>
    </>
  )
}
