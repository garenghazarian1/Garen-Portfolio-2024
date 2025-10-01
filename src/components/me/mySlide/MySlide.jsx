"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Loading from "@/components/loading/Loading";
import styles from "./MySlide.module.css";

export default function MySlide() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("Slides");
  const cursorRef = useRef(null);

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

  if (isLoading) return <Loading />;

  const slides = [
    {
      src: "/001.png",
      title: t("introduction.title"),
      text: t("introduction.text"),
    },
    {
      src: "/002.png",
      title: t("earlyCareer.title"),
      text: t("earlyCareer.text"),
    },
    {
      src: "/003.png",
      title: t("movingToBelgium.title"),
      text: t("movingToBelgium.text"),
    },
    {
      src: "/004.png",
      title: t("personalLife.title"),
      text: t("personalLife.text"),
    },
    {
      src: "/005.png",
      title: t("techInGermany.title"),
      text: t("techInGermany.text"),
    },
    {
      src: "/006.png",
      title: t("currentProject.title"),
      text: t("currentProject.text"),
    },
    {
      src: "/007.png",
      title: t("conclusion.title"),
      text: t("conclusion.text"),
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div ref={cursorRef} className={styles.cursorGlow}></div>

      {/* Introduction Section */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            Welcome to My Journey
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            Discover the story of my life through these meaningful moments
          </motion.p>
        </div>
        <div className={styles.bgImage} />

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className={styles.scrollText}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll down to explore
          </motion.div>
          <motion.div
            className={styles.scrollArrow}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Slide Sections */}
      {slides.map((slide, index) => (
        <motion.section
          key={index}
          className={styles.section}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.content}>
            <motion.div variants={itemVariants} className={styles.imageWrapper}>
              <Image
                src={slide.src}
                width={500}
                height={500}
                alt={`Slide ${index + 1}`}
                className={styles.img}
              />
            </motion.div>

            <motion.div className={styles.textWrapper} variants={itemVariants}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.text}>{slide.text}</p>
            </motion.div>
          </div>
          <div
            className={styles.bgImage}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        </motion.section>
      ))}
    </div>
  );
}
