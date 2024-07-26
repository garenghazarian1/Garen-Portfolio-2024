"use client";
import QRCodeGenerator from "@/components/qrCodeGenerator/QRCodeGenerator";
import styles from "./QrCode.module.css";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function QrCode() {
  const t = useTranslations("Me");
  return (
    <>
      <div className="nav">
        <Link href="/">{t("backToHome")}</Link>
      </div>
      <QRCodeGenerator />
    </>
  );
}
