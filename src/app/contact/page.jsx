import Contact from '@/components/contact/Contact'
import styles from "./ContactMe.module.css"
import Link from 'next/link'
import Footer from '@/components/footer/Footer'
import ContactTest from '@/components/contactTest/ContactTest'


export default function page() {
  return (
    <>
    <div className={styles.container}>
    <Link href="/" className={styles.nav} >Back to Home</Link>
    <Contact/>
    {/* <ContactTest/> */}
    <Footer/>
    </div>
    </>
  )
}
