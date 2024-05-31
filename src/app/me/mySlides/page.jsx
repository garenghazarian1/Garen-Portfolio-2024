import MySlide from '@/components/me/mySlide/MySlide';
import styles from "./MySlides.module.css"
import Link from 'next/link';

export default function page() {
  return (
    <>
     <Link href="/" className={styles.nav} >Back to Home</Link>
    <MySlide />
    </>
  )
}
