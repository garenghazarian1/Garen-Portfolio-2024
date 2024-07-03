import Contact from '@/components/contact/Contact'
import styles from "./ContactMe.module.css"
// import Link from 'next/link'
import Footer from '@/components/footer/Footer'
import ContactTest from '@/components/contactTest/ContactTest'
import { Link } from '@/navigation';
import {useTranslations} from 'next-intl';


export default function page() {
  const t = useTranslations('Me');
  return (
    <>
    <div className={styles.container}>
    <Link href="/" className="nav" >{t('backToHome')}</Link>
    <Contact/>
    {/* <ContactTest/> */}
    <Footer/>
    </div>
    </>
  )
}
