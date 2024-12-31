"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/Loading";
import styles from "./Main.module.css";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("Index");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}></div>

      {/* Section 1 */}
      <div className={styles.container1}>
        <Link href="/me" className={`${styles.child1ALink}`}>
          {t("me")}
        </Link>

        <Link href="/me/mySlides" className={`${styles.child1BLink}`}>
          {t("slide")}
        </Link>
        <Link href="/me/myPhoto" className={`${styles.child1BLink}`}>
          {t("photos")}
        </Link>
        <Link href="/me/about" className={`${styles.child1BLink}`}>
          {t("aboutMe")}
        </Link>
        <Link href="/me/follow" className={`${styles.child1BLink}`}>
          {t("followMe")}
        </Link>
      </div>

      {/* Section 2 */}
      <div className={styles.container2}>
        <Link href="/projects" className={`${styles.child2ALink}`}>
          {t("projects")}
        </Link>
        <Link href="/projects/qrCode" className={`${styles.child2BLink}`}>
          {t("qr")}
        </Link>
        <Link href="/projects/bmi" className={`${styles.child2CLink}`}>
          BMI
        </Link>
      </div>

      {/* Section 3 */}
      <div className={styles.container3}>
        <Link href="/contact" className={styles.child3}>
          {t("contact")}
        </Link>
        <Link href="/qualifications" className={styles.child4}>
          {t("qualifications")}
        </Link>
      </div>
    </div>
  );
}
