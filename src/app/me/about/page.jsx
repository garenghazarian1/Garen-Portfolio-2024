
import styles from "./About.module.css"
import Link from 'next/link';
import AboutMe from '@/components/me/meImageInfo/AboutMe';

export default function page() {
  return (
    <>
     <Link href="/me" className={styles.nav} >Back to ME Page</Link>
    <AboutMe />
    </>
  )
}
