"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./MyPhotos.module.css";
import Loading from "@/components/loading/Loading";

const images = [
  { src: "/g01a.jpg", alt: "Me in EU", description: "Exploring Europe" },
  { src: "/g02.jpg", alt: "Me in Nature", description: "Serenity in Nature" },
  {
    src: "/g03.jpg",
    alt: "Me at Grand Place",
    description: "Grand Place Memories",
  },
];

export default function MyPhotos() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const cursorRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const sectionsRef = useRef([]);

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

  // Simple scroll detection
  useEffect(() => {
    const updateSection = () => {
      if (!pageWrapperRef.current) return;

      const scrollTop = pageWrapperRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const newSection = Math.floor(scrollTop / sectionHeight);

      if (newSection !== currentSection && newSection >= 0 && newSection < 4) {
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

  const totalSections = images.length + 1;

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
            My Photo Gallery
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            Capturing moments from my journey through Europe and beyond
          </motion.p>
          <motion.div
            className={styles.scrollInstruction}
            variants={itemVariants}
          >
            <motion.div
              className={styles.scrollText}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll down to see more photos
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

      {/* Photo Sections */}
      {images.map((image, index) => (
        <motion.section
          key={index}
          ref={(el) => (sectionsRef.current[index + 1] = el)}
          className={styles.section}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.content}>
            <motion.div variants={itemVariants} className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className={styles.img}
                priority={index === 0}
              />
            </motion.div>

            <motion.div className={styles.textWrapper} variants={itemVariants}>
              <h2 className={styles.title}>{image.description}</h2>
              <p className={styles.text}>{image.alt}</p>
            </motion.div>
          </div>
          <div
            className={styles.bgImage}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        </motion.section>
      ))}
    </div>
  );
}
