"use client"
import { useState, useEffect } from 'react';
import Loading from '@/components/loading/Loading';
import styles from "./Main.module.css"
import Link from 'next/link';

import {abril, sevillana, bad, pt} from "@/app/ui/fonts"


// className={`${abril.className} `}
export default function MainPage() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
    <main >
      <div className={styles.container}>
        <div className={styles.container1} >
            <Link href="/me" className={`${sevillana.className} ${styles.child1}`}>ME</Link>
            <Link href="/projects" className={`${abril.className}  ${styles.child2}`}>PROJECTS</Link>
        </div>
        <div className={styles.container1} >
            <Link href="/contact" className={`${bad.className}  ${styles.child3}`}>CONTACT</Link>
            <Link href="/qualifications" className={`${pt.className}  ${styles.child4}`}>QUALIFICATIONS</Link>
            </div>
            </div>
        </main>
    </>
  )
}
