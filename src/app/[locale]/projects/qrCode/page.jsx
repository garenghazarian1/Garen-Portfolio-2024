"use client";
import QRCodeGenerator from "@/components/qrCodeGenerator/QRCodeGenerator";
import styles from "./QrCode.module.css";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function QrCode() {
  const t = useTranslations("Me");
  return (
    <>
      <Link className="nav" href="/">
        {t("backToHome")}
      </Link>
      <QRCodeGenerator />
    </>
  );
}
