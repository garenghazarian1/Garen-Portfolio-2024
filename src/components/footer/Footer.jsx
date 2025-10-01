"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import styles from "./Footer.module.css";
import Loading from "@/components/loading/Loading";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  const cursorRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const sectionsRef = useRef([]);
  const t = useTranslations("Footer");
  const locale = useLocale();

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

  // Prevent event conflicts with global navigation
  useEffect(() => {
    const preventNavConflict = (e) => {
      const navButton = document.querySelector(".nav");
      if (navButton && navButton.contains(e.target)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    };

    document.addEventListener("click", preventNavConflict, true);
    document.addEventListener("mousedown", preventNavConflict, true);
    document.addEventListener("mouseup", preventNavConflict, true);

    return () => {
      document.removeEventListener("click", preventNavConflict, true);
      document.removeEventListener("mousedown", preventNavConflict, true);
      document.removeEventListener("mouseup", preventNavConflict, true);
    };
  }, []);

  // Simple scroll detection
  useEffect(() => {
    const updateSection = () => {
      if (!pageWrapperRef.current) return;

      const scrollTop = pageWrapperRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const newSection = Math.floor(scrollTop / sectionHeight);

      if (newSection !== currentSection && newSection >= 0 && newSection < 2) {
        setCurrentSection(newSection);
      }
    };

    const interval = setInterval(updateSection, 100);
    const wrapper = pageWrapperRef.current;

    if (wrapper) {
      wrapper.addEventListener("scroll", updateSection);
    }

    return () => {
      clearInterval(interval);
      if (wrapper) {
        wrapper.removeEventListener("scroll", updateSection);
      }
    };
  }, [currentSection]);

  // Click to scroll to section
  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setCurrentSection(index);
  };

  if (isLoading) return <Loading />;

  const totalSections = 2; // 1 intro + 1 links section

  const socialLinks = [
    {
      href: "/Garen-Ghazarian-eng-11-sep-2024.pdf",
      label: t("links.resumeShort"),
      sublabel: t("links.pdfLabel"),
      type: "resume",
      icon: "📄",
    },
    {
      href: "/Garen-Ghazarian-full-11-sep-2024.pdf",
      label: t("links.resumeFull"),
      sublabel: t("links.pdfLabel"),
      type: "resume",
      icon: "📋",
    },
    {
      href: "https://www.linkedin.com/in/garen-ghazarian-1692812a5/",
      label: t("links.linkedin"),
      sublabel: t("links.professionalNetwork"),
      type: "social",
      icon: "💼",
    },
    {
      href: "https://github.com/garenghazarian1",
      label: t("links.github"),
      sublabel: t("links.codeRepository"),
      type: "social",
      icon: "💻",
    },
  ];

  return (
    <div ref={pageWrapperRef} className={styles.pageWrapper}>
      <div ref={cursorRef} className={styles.cursorGlow}></div>

      {/* Progress Bar */}
      <div className={styles.scrollProgress}>
        <div
          className={styles.progressBar}
          style={{
            width: `${((currentSection + 1) / totalSections) * 100}%`,
          }}
        />
      </div>

      {/* Section Indicators */}
      <div className={styles.sectionIndicators}>
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSection ? styles.active : ""
            }`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Introduction Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("title")}
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("subtitle")}
          </motion.p>

          {/* Futuristic Stats */}
          <motion.div className={styles.statsContainer} variants={itemVariants}>
            <motion.div className={styles.statItem} variants={itemVariants}>
              <div className={styles.statNumber}>2+</div>
              <div className={styles.statLabel}>{t("stats.experience")}</div>
            </motion.div>
            <motion.div className={styles.statItem} variants={itemVariants}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>{t("stats.projects")}</div>
            </motion.div>
            <motion.div className={styles.statItem} variants={itemVariants}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>{t("stats.technologies")}</div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scrollInstruction}
            variants={itemVariants}
          >
            <motion.div
              className={styles.scrollText}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {t("scrollInstruction")}
            </motion.div>
            <motion.div
              className={styles.scrollArrow}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>

      {/* Social Links Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            {t("sectionTitle")}
          </motion.h2>

          <motion.div className={styles.linksGrid} variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkCard} ${styles[link.type]}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className={styles.linkIcon}>{link.icon}</div>
                <div className={styles.linkContent}>
                  <h3 className={styles.linkTitle}>{link.label}</h3>
                  <p className={styles.linkSubtitle}>{link.sublabel}</p>
                </div>
                <div className={styles.linkGlow}></div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Button */}
          <motion.div {...motionEffect} variants={itemVariants}>
            <Link href={`/${locale}/contact`} className={styles.ultraButton}>
              {t("contactButton")}
            </Link>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>
    </div>
  );
}
