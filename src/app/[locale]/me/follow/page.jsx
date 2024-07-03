
import styles from "./Follow.module.css"
// import Link from 'next/link';
import { Link } from '@/navigation';
import Footer from "@/components/footer/Footer";
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('Me');
  return (
    <>
     <Link href="/me" className="nav" >{t('backToHome')}</Link>
    <Footer />
    </>
  )
}
