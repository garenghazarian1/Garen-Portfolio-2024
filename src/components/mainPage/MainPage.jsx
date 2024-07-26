"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/Loading";
import styles from "./Main.module.css";
// import Link from 'next/link';
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { abril, sevillana, bad, pt } from "@/app/ui/fonts";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontClass, setFontClass] = useState(bad.className);
  const t = useTranslations("Index");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Interval to change fonts every 2 minutes
    const fontInterval = setInterval(() => {
      setFontClass((currentFont) => {
        // Cycle through fonts
        if (currentFont === bad.className) return abril.className;
        if (currentFont === abril.className) return sevillana.className;
        if (currentFont === sevillana.className) return pt.className;
        return bad.className;
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(fontInterval);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={` ${styles.child1}`}>
            <Link href="/me" className={`${fontClass} ${styles.child1A} `}>
              {t("me")}
            </Link>

            <div className={styles.child1B}>
              <Link href="/me/mySlides" className={` ${styles.child1C}`}>
                {t("slide")}
              </Link>
              <Link href="/me/myPhoto" className={` ${styles.child1C}`}>
                {t("photos")}
              </Link>
              <Link href="/me/about" className={` ${styles.child1C}`}>
                {t("aboutMe")}
              </Link>
              <Link href="/me/follow" className={` ${styles.child1C}`}>
                {t("followMe")}
              </Link>
            </div>
          </div>

          {/* ${styles.child2} */}
          <div className={styles.child2}>
            <div className={`${bad.className} ${styles.child2B} `}>
              <Link href="/projects">{t("projects")}</Link>
            </div>

            <div className={styles.child2B}>
              <div className={` ${styles.child2CText} `}>
                <h2 className={`${bad.className}`}>{t("services")}</h2>
              </div>
              <div className={`${styles.child2C} `}>
                <Link href="/projects/qrCode">{t("qr")}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container1}>
          <Link href="/contact" className={`${bad.className} ${styles.child3}`}>
            {t("contact")}
          </Link>
          <Link
            href="/qualifications"
            className={`${bad.className} ${styles.child4}`}
          >
            {t("qualifications")}
          </Link>
        </div>
      </div>
    </>
  );
}
