"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import styles from "./Contact.module.css";
import Loading from "@/components/loading/Loading";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const cursorRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const t = useTranslations("Contact");

  const motionEffect = {
    whileHover: { scale: 1.05, rotateX: 3, rotateY: 3 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = {
    mobile: "+49 (0)15257398979",
    emailSecondary: "garenghazarian1@gmail.com",
    street: "Ottilie-Hoffmann-Straße 40",
    city: "Bremen",
    state: "Bremen",
    zipCode: "28213",
  };

  const contactItems = [
    {
      type: "address",
      icon: "📍",
      title: t("addressTitle"),
      details: [
        `${t("street")} ${contactInfo.street}`,
        `${t("city")} ${contactInfo.city}, ${contactInfo.zipCode}`,
        t("country"),
      ],
    },
    {
      type: "phone",
      icon: "📞",
      title: t("phoneTitle"),
      details: [
        {
          label: t("mobile"),
          value: contactInfo.mobile,
          link: `tel:${contactInfo.mobile}`,
        },
      ],
    },
    {
      type: "email",
      icon: "📧",
      title: t("emailTitle"),
      details: [
        {
          label: t("email"),
          value: contactInfo.emailSecondary,
          link: `mailto:${contactInfo.emailSecondary}`,
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div ref={pageWrapperRef} className={styles.pageWrapper}>
      <div ref={cursorRef} className={styles.cursorGlow} />

      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("contactHeader")}
          </motion.h1>

          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("contactSubtitle")}
          </motion.p>

          <div className={styles.contactGrid}>
            {contactItems.map((item, index) => (
              <motion.div
                key={item.type}
                className={styles.contactCard}
                variants={itemVariants}
                {...motionEffect}
                onHoverStart={() => setHoveredItem(item.type)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardContent}>
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className={styles.detailItem}>
                      {typeof detail === "string" ? (
                        <p className={styles.detailText}>{detail}</p>
                      ) : (
                        <>
                          <span className={styles.detailLabel}>
                            {detail.label}:
                          </span>
                          <a
                            href={detail.link}
                            className={styles.detailLink}
                            target={
                              detail.link.startsWith("mailto:")
                                ? "_self"
                                : "_blank"
                            }
                            rel={
                              detail.link.startsWith("mailto:")
                                ? ""
                                : "noopener noreferrer"
                            }
                          >
                            {detail.value}
                          </a>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.cardGlow}></div>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.mapSection} variants={itemVariants}>
            <h3 className={styles.mapTitle}>{t("mapTitle")}</h3>
            <div className={styles.mapContainer}>
              <iframe
                className={styles.map}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  contactInfo.street +
                    ", " +
                    contactInfo.city +
                    ", " +
                    contactInfo.zipCode
                )}&output=embed`}
                allowFullScreen=""
                loading="lazy"
                title="Contact Location"
              />
              <div className={styles.mapOverlay}></div>
            </div>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>
    </div>
  );
};

export default Contact;
