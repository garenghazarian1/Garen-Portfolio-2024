"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import enTranslations from "../../public/locales/en/common.json";
import deTranslations from "../../public/locales/de/common.json";

const translations = {
  en: enTranslations,
  de: deTranslations,
};

export const useTranslation = () => {
  const pathname = usePathname();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    // Extract the locale from the pathname, e.g., /en/page or /de/page
    const currentLocale = pathname.split("/")[1];
    if (translations[currentLocale]) {
      setLocale(currentLocale);
    }
  }, [pathname]);

  const [translation, setTranslation] = useState(
    translations[locale] || translations["en"]
  );

  useEffect(() => {
    setTranslation(translations[locale] || translations["en"]);
  }, [locale]);

  const t = (key) => translation[key] || key;

  return { t, locale };
};
