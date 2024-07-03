"use client"
import MySlide from '@/components/me/mySlide/MySlide';
import styles from "./MySlides.module.css"
// import Link from 'next/link';
import { Link } from '@/navigation';
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('Me');
  return (
    <>
     <Link href="/me" className="nav" >{t('backToHome')}</Link>
    <MySlide />
    </>
  )
}
