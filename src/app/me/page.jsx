

import Link from 'next/link'
import styles from "./Me.module.css"
import Footer from '@/components/footer/Footer'

export default function page() {
  return (
    <>
    <div className={styles.container}>
    <Link href="/" className="nav" >Back to Home</Link>
    <main>
            <div className={styles.container}>
                <div className={styles.container1}>
                    <Link href="/me/mySlides" className={` ${styles.child1}`}>My Slide</Link>
                    <Link href="/me/myPhoto" className={` ${styles.child2}`}>My Photos</Link>
                </div>
                <div className={styles.container1}>
                    <Link href="/me/about" className={` ${styles.child3}`}>About Me</Link>
                    <Link href="/me/follow" className={` ${styles.child4}`}>Follow me</Link>
                </div>
            </div>
        </main>
      
       
       {/* <Footer/> */}
       </div>
    </>
  )
}
