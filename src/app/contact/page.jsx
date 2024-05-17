import Contact from '@/components/contact/Contact'
import styles from "./ContactMe.module.css"
import Link from 'next/link'

export default function page() {
  return (
    <>
    <Link href="/" className={styles.nav} >Back to Home</Link>
    <Contact/>
    </>
  )
}
