
"use client"
// import Link from 'next/link'
import { Link } from '@/navigation';
import styles from "./Me.module.css"
import Footer from '@/components/footer/Footer'
import {useTranslations} from 'next-intl';

export default function Page() {
   const t = useTranslations('Me');
  return (
    <>
    <div className={styles.container}>
    <Link href="/" className="nav" >{t('backToHome')}</Link>
    <main>
            <div className={styles.container}>
                <div className={styles.container1}>
                    <Link href="/me/mySlides" className={` ${styles.child1}`}>{t('mySlide')}</Link>
                    <Link href="/me/myPhoto" className={` ${styles.child2}`}>{t('myPhotos')}</Link>
                </div>
                <div className={styles.container1}>
                    <Link href="/me/about" className={` ${styles.child3}`}>{t('aboutMe')}</Link>
                    <Link href="/me/follow" className={` ${styles.child4}`}>{t('followMe')}</Link>
                </div>
            </div>
        </main>
      
       
       {/* <Footer/> */}
       </div>
    </>
  )
}
