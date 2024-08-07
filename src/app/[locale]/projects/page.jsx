import MyProjects from "@/components/projects/MyProjects";
import styles from "./Projects.module.css";
// import Link from "next/link"
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Me");
  return (
    <>
      <div className="nav">
        <Link href="/">{t("backToHome")}</Link>
      </div>
      <MyProjects />
    </>
  );
}
