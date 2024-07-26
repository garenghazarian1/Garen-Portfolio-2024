import styles from "./About.module.css";
// import Link from 'next/link';
import { Link } from "@/navigation";
import AboutMe from "@/components/me/meImageInfo/AboutMe";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Me");
  return (
    <>
      <Link href="/me" className="nav">
        {t("backToHome")}
      </Link>
      <AboutMe />
    </>
  );
}
