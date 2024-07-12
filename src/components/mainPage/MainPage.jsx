"use client"
import { useState, useEffect } from 'react';
import Loading from '@/components/loading/Loading';
import styles from "./Main.module.css"
// import Link from 'next/link';
import { Link } from '@/navigation';
import {useTranslations} from 'next-intl';
import {abril, sevillana, bad, pt} from "@/app/ui/fonts"

export default function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fontClass, setFontClass] = useState(bad.className);
    const t = useTranslations('Index');
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },500);

    // Interval to change fonts every 2 minutes
    const fontInterval = setInterval(() => {
      setFontClass(currentFont => {
          // Cycle through fonts
          if (currentFont === bad.className) return abril.className;
          if (currentFont === abril.className) return sevillana.className;
          if (currentFont === sevillana.className) return pt.className;
          return bad.className;
      });
  }, 2000); 

  return () => {
    clearTimeout(timer);
    clearInterval(fontInterval); 
};
}, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
        <main>
            <div className={styles.container}>
            
                <div className={styles.container1}>
                    <Link href="/me" className={`${fontClass} ${styles.child1}`}>
                      <div className={styles.meMobile}>{t('me')}</div>
                        <div className={styles.spacer}></div>
                          <div className={styles.childDiv}>
                    
                            <Link href="/me/mySlides" className={` ${styles.child}`}>{t('slide')}</Link>
                            <Link href="/me/myPhoto" className={` ${styles.child}`}>{t('photos')}</Link>
                            <Link href="/me/about" className={` ${styles.child}`}>{t('aboutMe')}</Link>
                            <Link href="/me/follow" className={` ${styles.child}`}>{t('followMe')}</Link>
                          </div>
                    </Link>

                    {/* ${styles.child2} */}
                    <div className={styles.child2}>
                      <div className={styles.childProject}>
                      <Link href="/projects" className={`${bad.className} ${styles.childProjectButton} `}>
                    {t('projects')}
                    </Link>
                      </div>



                      <div className={styles.childProject}>
                        <div className={`${bad.className} ${styles.childProjectHeader}   `}>
                          <h2 className={`${bad.className} ${styles.childProjectHeader}   `} >
                            {t('services')}
                          </h2>
                        </div>
                        <div className={`${styles.childProjectButton}`}>
                          <Link href="/projects/qrCode" >
                          {t('qr')}
                          </Link>
                        </div>
                        
                      </div>
                    </div>
                    
                    
                    
                    
                </div>
                <div className={styles.container1}>
                    <Link href="/contact" className={`${bad.className} ${styles.child3}`}>{t('contact')}</Link>
                    <Link href="/qualifications" className={`${bad.className} ${styles.child4}`}>{t('qualifications')}</Link>
                </div>
            </div>
        </main>
    </>
);
}
