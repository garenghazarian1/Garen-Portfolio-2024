"use client";
import { useTranslations } from "next-intl";
import styles from "./Contact.module.css";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const t = useTranslations("Contact");

  const store = {
    mobile: "+49 (0)15257398979",
    emailPrimary: "garen@garenghazarian.de",
    emailSecondary: "garenghazarian1@gmail.com",
    street: "Ottilie-Hoffmann-Straße 40",
    city: "Bremen",
    state: "Bremen",
    zipCode: "28213",
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>{t("contactHeader")}</h2>
          <div>
            <p className={styles.p}>
              {t("street")} {store.street}
            </p>
            <p className={styles.p}>
              {t("city")} {store.city}, {store.zipCode}
            </p>
            <p className={styles.p}>{t("country")}</p>
          </div>
          <div style={{ marginTop: "32px" }}>
            <p className={styles.p}>
              {t("mobile")}{" "}
              <a className={styles.a} href={`tel:${store.mobile}`}>
                {store.mobile}
              </a>
            </p>
            <p className={styles.p}>
              {t("email")}{" "}
              <a className={styles.a} href={`mailto:${store.emailPrimary}`}>
                {store.emailPrimary}
              </a>
            </p>
            <p className={styles.p}>
              {t("email")}{" "}
              <a className={styles.a} href={`mailto:${store.emailSecondary}`}>
                {store.emailSecondary}
              </a>
            </p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              className={styles.map}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                store.street + ", " + store.city + ", " + store.zipCode
              )}&output=embed`}
              allowFullScreen=""
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
