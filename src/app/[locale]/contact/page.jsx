"use client";
import Contact from "@/components/contact/Contact";
import styles from "./ContactMe.module.css";
// import Link from 'next/link'
import Footer from "@/components/footer/Footer";
import ContactTest from "@/components/contactTest/ContactTest";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Me");
  return (
    <>
      <div className={styles.container}>
        <div className="nav">
          <Link href="/">{t("backToHome")}</Link>
        </div>
        <Contact />
        {/* <ContactTest/> */}
        <Footer />
      </div>
    </>
  );
}
