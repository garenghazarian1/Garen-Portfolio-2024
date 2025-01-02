"use client";
// import Link from 'next/link'
import { Link } from "@/navigation";
import styles from "./Me.module.css";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Me");
  return (
    <>
      <div className="nav">
        <Link href="/">{t("backToHome")}</Link>
      </div>

      <div className={styles.container}>
        <Link href="/me/mySlides" className={` ${styles.child1}`}>
          {t("mySlide")}
        </Link>
        <Link href="/me/myPhoto" className={` ${styles.child2}`}>
          {t("myPhotos")}
        </Link>

        <Link href="/me/about" className={` ${styles.child3}`}>
          {t("aboutMe")}
        </Link>
        <Link href="/me/follow" className={` ${styles.child4}`}>
          {t("followMe")}
        </Link>
      </div>
    </>
  );
}
