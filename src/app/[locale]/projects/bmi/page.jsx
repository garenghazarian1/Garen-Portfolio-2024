import BodyMassIndex from "@/components/bodyMassIndex/BodyMassIndex";
import styles from "./Bmi.module.css";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Bmi() {
  const t = useTranslations("Me");
  return (
    <>
      <BodyMassIndex />
      <div className="nav">
        <Link href="/">{t("backToHome")}</Link>
      </div>
    </>
  );
}
