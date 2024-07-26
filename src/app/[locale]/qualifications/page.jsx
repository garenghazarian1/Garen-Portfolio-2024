import React from "react";
import styles from "./Qualifications.module.css";
import Qualification from "@/components/qualification/Qualification";
// import Link from 'next/link'
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Me");
  return (
    <>
      <div className="nav">
        <Link href="/">{t("backToHome")}</Link>
      </div>
      <Qualification />
    </>
  );
}
