"use client"
import { useState, useEffect } from 'react';
import Loading from '@/components/loading/Loading';
import styles from "./Main.module.css"
import Link from 'next/link';

import {abril, sevillana, bad, pt} from "@/app/ui/fonts"

export default function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fontClass, setFontClass] = useState(bad.className);

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
  }, 2000); // 120000 milliseconds = 2 minutes

  return () => {
    clearTimeout(timer);
    clearInterval(fontInterval); // Clear interval on component unmount
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
                    <Link href="/me" className={`${fontClass} ${styles.child1}`}>Me
                    <div className={styles.spacer}></div>
                    <div className={styles.childDiv}>
                      <Link href="/me/mySlides" className={` ${styles.child}`}>Slide</Link>
                      <Link href="/me/myPhoto" className={` ${styles.child}`}>Photos</Link>
                      <Link href="/me/about" className={` ${styles.child}`}>About Me</Link>
                      <Link href="/me/follow" className={` ${styles.child}`}>Follow me</Link>
                      </div>
                    </Link>
                    <Link href="/projects" className={`${bad.className} ${styles.child2}`}>PROJECTS</Link>
                </div>
                <div className={styles.container1}>
                    <Link href="/contact" className={`${bad.className} ${styles.child3}`}>CONTACT</Link>
                    <Link href="/qualifications" className={`${bad.className} ${styles.child4}`}>QUALIFICATIONS</Link>
                </div>
            </div>
        </main>
    </>
);
}
