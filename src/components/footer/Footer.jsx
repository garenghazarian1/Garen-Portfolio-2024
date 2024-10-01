import Image from "next/image";
import styles from "./Footer.module.css";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <>
      <div className={styles.socialLinks}>
        <a
          className={styles.infoA}
          href="/Garen-Ghazarian-eng-11-sep-2024.pdf"
          target="_blank"
        >
          <p>{t("downloadResume")}</p>

          <div>
            <p className={styles.imageContainer}>{t("pdfLabel")}</p>
          </div>
        </a>
        <a
          className={styles.infoA}
          href="https://www.linkedin.com/in/garen-ghazarian-1692812a5/"
          target="_blank"
        >
          {t("linkedin")}
        </a>
        <a
          className={styles.infoA}
          href="https://github.com/garenghazarian1"
          target="_blank"
        >
          {t("github")}
        </a>
        <a
          className={styles.infoA}
          href="/Garen-Ghazarian-full-11-sep-2024.pdf"
          target="_blank"
        >
          <p>{t("downloadFullResume")}</p>

          <div>
            <p className={styles.imageContainer}>{t("pdfLabel")}</p>
          </div>
        </a>
      </div>
    </>
  );
}
