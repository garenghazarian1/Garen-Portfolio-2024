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
        <Link className="nav" href="/">
          {t("backToHome")}
        </Link>

        <Contact />
        {/* <ContactTest/> */}
        <Footer />
      </div>
    </>
  );
}
