import MeImageInfo from '@/components/me/meImageInfo/MeImageInfo'
import MeSlide from '@/components/me/meSlide/MeSlide'
import Link from 'next/link'
import styles from "./Me.module.css"

export default function page() {
  return (
    <>
    <Link href="/" className={styles.nav} >Back to Home</Link>
        <MeSlide />
        <MeImageInfo />
    </>
  )
}
