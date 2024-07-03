import Link from 'next/link'
import styles from "./MyPhoto.module.css"
import MyPhotos from '@/components/me/myPhotos/MyPhotos'


export default function Page() {
  return (
    <>
    <Link href="/me" className="nav" >Back to ME Page</Link>
    <MyPhotos/>
    </>
  )
}
