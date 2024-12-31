"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LangBox.module.css";

export default function LangBox() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (locale) => {
    router.replace(`/${locale}`);
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className={styles.container} onClick={toggleDropdown}>
      <div className={styles.dropdown}>
        <div
          className={styles.option}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </div>
        <div
          className={styles.option}
          onClick={() => handleLanguageChange("de")}
        >
          DE
        </div>
      </div>
    </div>
  );
}
