"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Link } from "@/navigation";
import Loading from "@/components/loading/Loading";
import styles from "./MainPage2025.module.css";
import Camera3D from "../Camera3D/Camera3D";
import { useTranslations } from "next-intl";

// import Earth3D from "../Earth3D/Earth3D";

export default function MainPage2025() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("MainPage2025");
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
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
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00ffff,
        backgroundColor: 0x111111,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
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

  return (
    <div className={styles.pageWrapper}>
      <div ref={cursorRef} className={styles.cursorGlow}></div>
      {/* 🌍 Floating Earth3D as background corner */}
      {/* <div className={styles.earthBackground}>
        <Earth3D />
      </div> */}
      {/* page 001 */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("meet")}
          </motion.h1>

          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("intro")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className={styles.camera3DWrapper}
          >
            <Camera3D />
          </motion.div>

          <div className={styles.buttonGroup}>
            <motion.div {...motionEffect} variants={itemVariants}>
              <Link href="/me/about" className={styles.ultraButton}>
                {t("profileButton")}
              </Link>
            </motion.div>
          </div>
        </div>

        <div
          className={styles.bgImage}
          // style={{ backgroundImage: "url(/ao.png)" }}
        />
      </motion.section>
      {/* page 002 */}
      <motion.section
        ref={vantaRef}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("spaceTitle")}
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("spaceDesc")}
          </motion.p>
          <div className={styles.buttonGroup}>
            {[
              { href: "/me/mySlides", label: t("slides") },
              { href: "/me/myPhoto", label: t("photos") },
              { href: "/me/about", label: t("about") },
              { href: "/me/follow", label: t("follow") },
            ].map(({ href, label }) => (
              <motion.div key={label} {...motionEffect} variants={itemVariants}>
                <Link href={href} className={styles.ultraButton}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: "url(/g02.jpg)" }}
        />
      </motion.section>
      b1
      {/* page 003 */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("journeyTitle")}
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("journeyDesc")}
          </motion.p>
          <div className={styles.buttonGroup}>
            <motion.div {...motionEffect} variants={itemVariants}>
              <Link href="/me/mySlides" className={styles.ultraButton}>
                {t("timelineBtn")}
              </Link>
            </motion.div>
          </div>
        </div>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: "url(/003.png)" }}
        />
      </motion.section>
      {/* page 004 */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("natureTitle")}
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("natureDesc")}
          </motion.p>
          <div className={styles.buttonGroup}>
            <motion.div {...motionEffect} variants={itemVariants}>
              <Link href="/me/myPhoto" className={styles.ultraButton}>
                {t("galleryBtn")}
              </Link>
            </motion.div>
          </div>
        </div>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: "url(/g02.jpg)" }}
        />
      </motion.section>
      {/* page 005 */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("connectTitle")}
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("connectDesc")}
          </motion.p>
          <div className={styles.buttonGroup}>
            {[
              {
                href: "/Garen-Ghazarian-eng-11-sep-2024.pdf",
                label: t("resumeEng"),
              },
              {
                href: "/Garen-Ghazarian-full-11-sep-2024.pdf",
                label: t("resumeFull"),
              },
              {
                href: "https://linkedin.com/in/garen-ghazarian-1692812a5/",
                label: t("linkedin"),
              },
              {
                href: "https://github.com/garenghazarian1",
                label: t("github"),
              },
            ].map(({ href, label }) => (
              <motion.div key={label} {...motionEffect} variants={itemVariants}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ultraButton}
                >
                  {label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: "url(/g01a.jpg)" }}
        />
      </motion.section>
      {/* ---------------------- */}
      {/* page 006 */}
      {/* -------- */}
      <motion.section className={styles.section}>
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("projectsTitle")}
          </motion.h1>

          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("projectsDesc")}
          </motion.p>

          <ul className={styles.projectList}>
            <motion.li variants={itemVariants}>{t("ken")}</motion.li>

            <motion.li variants={itemVariants}>{t("euro")}</motion.li>
          </ul>

          <div className={styles.buttonGroup}>
            <motion.div {...motionEffect} variants={itemVariants}>
              <Link href="/projects" className={styles.ultraButton}>
                {t("projectsBtn")}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className={styles.bgImage} />
      </motion.section>
      {/* page 007 */}
      <motion.section className={styles.section}>
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("qrTitle")}
          </motion.h1>

          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("qrDesc")}
          </motion.p>
          <Link href="/projects/qrCode" className={styles.ultraButton}>
            {t("qrBtn")}
          </Link>
        </div>
      </motion.section>
      {/* page 008 */}
      <motion.section className={styles.section}>
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("bmiTitle")}
          </motion.h1>

          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("bmiDesc")}
          </motion.p>

          <motion.ul className={styles.projectList}>
            <motion.li variants={itemVariants}>{t("bmiFeature1")}</motion.li>
            <motion.li variants={itemVariants}>{t("bmiFeature2")}</motion.li>
            <motion.li variants={itemVariants}>{t("bmiFeature3")}</motion.li>
          </motion.ul>

          <div className={styles.buttonGroup}>
            <motion.div {...motionEffect} variants={itemVariants}>
              <Link href="/projects/bmi" className={styles.ultraButton}>
                {t("bmiBtn")}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* page 009 */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.animatedText} variants={itemVariants}>
            {t("qualTitle")}
          </motion.h1>

          <motion.p className={styles.animateP} variants={itemVariants}>
            {t("qualDesc")}
          </motion.p>

          <motion.ul className={styles.projectList}>
            <motion.li variants={itemVariants}>{t("qual1")}</motion.li>

            <motion.li variants={itemVariants}>{t("qual2")}</motion.li>
          </motion.ul>

          <div className={styles.buttonGroup}>
            <motion.div {...motionEffect} variants={itemVariants}>
              <Link href="/qualifications" className={styles.ultraButton}>
                {t("qualBtn")}
              </Link>
            </motion.div>
          </div>

          <Link href="/sitemap" className={styles.ultraButton}>
            {t("sitemap")}
          </Link>
        </div>

        <div className={styles.bgImage} />
      </motion.section>
    </div>
  );
}
