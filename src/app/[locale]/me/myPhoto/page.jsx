// import Link from 'next/link'
import { Link } from '@/navigation';
import styles from "./MyPhoto.module.css"
import MyPhotos from '@/components/me/myPhotos/MyPhotos'
import {useTranslations} from 'next-intl';


export default function Page() {
  const t = useTranslations('Me');
  return (
    <>
    <Link href="/me" className="nav" >{t('backToHome')}</Link>
    <MyPhotos/>
    </>
  )
}
