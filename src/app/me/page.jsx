import MeImageInfo from '@/components/me/meImageInfo/MeImageInfo'
import MySlide from '@/components/me/mySlide/MySlide'
import Link from 'next/link'
import styles from "./Me.module.css"

export default function page() {
  return (
    <>
    <div className={styles.container}>
    <Link href="/" className={styles.nav} >Back to Home</Link>
        <MySlide />
       <MeImageInfo /> 
       </div>
    </>
  )
}
