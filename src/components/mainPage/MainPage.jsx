"use client"
import { useState, useEffect } from 'react';
import Loading from '@/components/loading/Loading';
import styles from "./Main.module.css"
import Link from 'next/link';
import {Bad_Script
} from "next/font/google";

const inter =  Bad_Script({ 
  subsets: ["latin"],
weight: ["400"]
});

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
    <main className={inter.className}>
      <div className={styles.container}>
        <div className={styles.container1} >
            <Link href="/me" className={styles.child1}>ME</Link>
            <Link href="/projects" className={styles.child2}>PROJECTS</Link>
        </div>
        <div className={styles.container1} >
            <Link href="/contact" className={styles.child3}>CONTACT</Link>
            <Link href="/qualifications" className={styles.child4}>QUALIFICATIONS</Link>
            </div>
            </div>
        </main>
    </>
  )
}
