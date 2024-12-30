"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/Loading";
import styles from "./Main.module.css";
// import Link from 'next/link';
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { bad } from "@/app/ui/fonts";
// import { abril, sevillana, bad, pt } from "@/app/ui/fonts";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  // // const [fontClass, setFontClass] = useState(bad.className);
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
    <>
      <div className={`${styles.container} `}>
        <div className={`${styles.containerBackground} ${styles.glow}  `}>
          <div className={` ${styles.el}`}></div>

          <div className={`${styles.container1}  `}>
            <div className={` ${styles.child1} `}>
              <div className={`${styles.child1A} `}>
                <Link
                  href="/me"
                  className={` ${bad.className} ${styles.child1ALink} `}
                >
                  {t("me")}
                </Link>
                {/* <div className={` ${styles.elA}`}></div> */}
              </div>

              <div className={styles.child1B}>
                <Link
                  href="/me/mySlides"
                  className={`${bad.className} ${styles.child1BLink} `}
                >
                  {t("slide")}
                </Link>
                <Link
                  href="/me/myPhoto"
                  className={`${bad.className} ${styles.child1BLink}`}
                >
                  {t("photos")}
                </Link>
                <Link
                  href="/me/about"
                  className={`${bad.className} ${styles.child1BLink}`}
                >
                  {t("aboutMe")}
                </Link>
                <Link
                  href="/me/follow"
                  className={`${bad.className} ${styles.child1BLink}`}
                >
                  {t("followMe")}
                </Link>
              </div>
            </div>
          </div>

          {/* ${styles.child2} */}
          <div className={`${styles.container2}  `}>
            <div className={styles.child2}>
              <Link
                href="/projects"
                className={`${styles.child2ALink} ${bad.className} ${styles.child2A} `}
              >
                {t("projects")}
              </Link>

              <Link
                href="/projects/qrCode"
                className={`${styles.child2BLink} ${styles.child2B} ${bad.className} `}
              >
                {t("qr")}
              </Link>

              <Link
                href="/projects/bmi"
                className={`${styles.child2CLink} ${styles.child2C} ${bad.className}`}
              >
                BMI
              </Link>
            </div>
          </div>
        </div>
        {/* container3 */}
        <div className={styles.container3}>
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
