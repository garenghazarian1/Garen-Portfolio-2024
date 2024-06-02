import MySlide from '@/components/me/mySlide/MySlide';
import styles from "./MySlides.module.css"
import Link from 'next/link';

export default function page() {
  return (
    <>
     <Link href="/me" className={styles.nav} >Back to ME Page</Link>
    <MySlide />
    </>
  )
}
