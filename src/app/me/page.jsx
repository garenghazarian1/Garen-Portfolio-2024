import MeImageInfo from '@/components/me/meImageInfo/MeImageInfo'

import Link from 'next/link'
import styles from "./Me.module.css"
import Footer from '@/components/footer/Footer'

export default function page() {
  return (
    <>
    <div className={styles.container}>
    <Link href="/" className={styles.nav} >Back to Home</Link>
    <main>
            <div className={styles.container}>
                <div className={styles.container1}>
                    <Link href="/me/mySlides" className={` ${styles.child1}`}>My Slide</Link>
                    <Link href="/projects" className={` ${styles.child2}`}>My Photos</Link>
                </div>
                <div className={styles.container1}>
                    <Link href="/contact" className={` ${styles.child3}`}>other</Link>
                    <Link href="/qualifications" className={` ${styles.child4}`}>other</Link>
                </div>
            </div>
        </main>
      
       {/* <MeImageInfo />  */}
       {/* <Footer/> */}
       </div>
    </>
  )
}
