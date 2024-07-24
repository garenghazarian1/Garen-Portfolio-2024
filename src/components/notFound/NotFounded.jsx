import Link from "next/link";
import styles from "./NotFound.module.css";
import { useTranslations } from "next-intl";

export default function NotFounded() {
  const t = useTranslations("NotFound");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>{t("header")}</h1>
        <p className={styles.subHeader}>{t("subHeader")}</p>
        <p className={styles.description}>{t("description")}</p>

        <Link href="/" className={styles.linkButton}>
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
}
