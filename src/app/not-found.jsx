import NotFounded from "@/components/notFound/NotFounded";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("Me");
  return (
    <>
      <NotFounded />
      <Link href="/" className={styles.linkButton}>
        {t("backToHome")}
      </Link>
    </>
  );
}
