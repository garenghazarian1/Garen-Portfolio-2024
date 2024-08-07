// components/QRCodeGenerator.js
"use client";
import { useRef, useState } from "react";
import QRCode from "qrcode";
import { jsPDF } from "jspdf";
import { Canvg } from "canvg";
import styles from "./QRCodeGenerator.module.css";
import { useTranslations } from "next-intl";

export default function QRCodeGenerator() {
  const t = useTranslations("QRCodeGenerator");

  const textInputRef = useRef();
  const canvasRef = useRef();
  const downloadLinkRef = useRef();
  const [size, setSize] = useState(200);
  const [color, setColor] = useState("#b8860b");
  const [errorCorrection, setErrorCorrection] = useState("L");
  const [format, setFormat] = useState("png");

  const generateQRCode = () => {
    const text = textInputRef.current.value;
    QRCode.toCanvas(
      canvasRef.current,
      text,
      {
        width: size,
        color: {
          dark: color,
          light: "#ffffff",
        },
        errorCorrectionLevel: errorCorrection,
      },
      (error) => {
        if (error) console.error(error);
        console.log("QR code generated!");
        setDownloadLink();
      }
    );
  };

  const setDownloadLink = () => {
    const canvas = canvasRef.current;
    if (format === "png" || format === "jpg") {
      downloadLinkRef.current.href = canvas.toDataURL(`image/${format}`);
      downloadLinkRef.current.download = `qrcode.${format}`;
    } else if (format === "svg") {
      const svg = createSVG();
      downloadLinkRef.current.href =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
      downloadLinkRef.current.download = "qrcode.svg";
    } else if (format === "pdf") {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10);
      const pdfData = pdf.output("bloburl");
      downloadLinkRef.current.href = pdfData;
      downloadLinkRef.current.download = "qrcode.pdf";
    }
  };

  const createSVG = () => {
    const text = textInputRef.current.value;
    const svgCanvas = document.createElement("canvas");
    QRCode.toCanvas(svgCanvas, text, {
      width: size,
      color: {
        dark: color,
        light: "#ffffff",
      },
      errorCorrectionLevel: errorCorrection,
    });
    const svg = Canvg.fromString(svgCanvas, svgCanvas.toDataURL());
    return svg;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.text}>{t("description")}</p>
      <input
        type="text"
        ref={textInputRef}
        placeholder={t("placeholder")}
        className={styles.input}
      />
      <label className={styles.label}>{t("size")}</label>
      <select
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        className={styles.select}
      >
        <option value={100}>100x100</option>
        <option value={200}>200x200</option>
        <option value={300}>300x300</option>
        <option value={400}>400x400</option>
      </select>
      <label className={styles.label}>{t("color")}</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={styles.inputColor}
      />
      <label className={styles.label}>{t("errorCorrection")}</label>
      <select
        value={errorCorrection}
        onChange={(e) => setErrorCorrection(e.target.value)}
        className={styles.select}
      >
        <option value="L">{t("low")}</option>
        <option value="M">{t("medium")}</option>
        <option value="Q">{t("quartile")}</option>
        <option value="H">{t("high")}</option>
      </select>
      <label className={styles.label}>{t("format")}</label>
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className={styles.select}
      >
        <option value="png">PNG</option>
        <option value="jpg">JPG</option>
        <option value="svg">SVG</option>
        <option value="pdf">PDF</option>
      </select>
      <button onClick={generateQRCode} className={styles.button}>
        {t("generate")}
      </button>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <a ref={downloadLinkRef} className={styles.downloadLink}>
        <button className={styles.button}>{t("download")}</button>
      </a>
    </div>
  );
}
