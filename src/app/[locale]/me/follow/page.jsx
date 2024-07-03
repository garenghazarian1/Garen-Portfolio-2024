
import styles from "./Follow.module.css"
import Link from 'next/link';

import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
     <Link href="/me" className="nav" >Back to ME Page</Link>
    <Footer />
    </>
  )
}
