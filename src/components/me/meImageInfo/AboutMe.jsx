"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import styles from "./AboutMe.module.css";
import Loading from "@/components/loading/Loading";

export default function AboutMe() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [codeAnimation, setCodeAnimation] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const cursorRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const sectionsRef = useRef([]);
  const terminalRef = useRef(null);
  const t = useTranslations("AboutMe");

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

  // Terminal typing animation
  useEffect(() => {
    const terminalMessages = [
      "> npm install garen-ghazarian",
      "> Installing Full-Stack Developer...",
      "> ✓ React.js expertise loaded",
      "> ✓ Node.js backend initialized",
      "> ✓ MongoDB database connected",
      "> ✓ CSS animations compiled",
      "> ✓ Ready to build amazing projects!",
      "> Welcome to my digital universe 🚀",
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeTerminal = () => {
      const currentMessage = terminalMessages[messageIndex];

      if (isDeleting) {
        setTerminalText(currentMessage.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTerminalText(currentMessage.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentMessage.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % terminalMessages.length;
        typeSpeed = 500;
      }

      setTimeout(typeTerminal, typeSpeed);
    };

    const timer = setTimeout(typeTerminal, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Code animation trigger
  useEffect(() => {
    if (currentSection === 3) {
      setCodeAnimation(true);
    }
  }, [currentSection]);

  // Easter egg - Konami code
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

      if (newSection !== currentSection && newSection >= 0 && newSection < 6) {
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

  const totalSections = 6; // 1 intro + 5 info sections

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
            About Me
          </motion.h1>
          <motion.p className={styles.animateP} variants={itemVariants}>
            Get to know me better through my personal and professional journey
          </motion.p>

          {/* Terminal Window */}
          <motion.div className={styles.terminal} variants={itemVariants}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalButtons}>
                <span className={styles.close}></span>
                <span className={styles.minimize}></span>
                <span className={styles.maximize}></span>
              </div>
              <div className={styles.terminalTitle}>garen@developer:~$</div>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalText}>{terminalText}</div>
              <motion.div
                className={styles.cursor}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
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
              Scroll down to learn more
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

      {/* Personal Information Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("myName")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("name")}
            </motion.p>
          </motion.div>

          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("birthday")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("birthDate")}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>

      {/* Professional Information Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[2] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("profession")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("professionTitle")}
            </motion.p>
          </motion.div>

          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("hobbies")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("hobbyList")}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>

      {/* Technical Skills Section 1 */}
      <motion.section
        ref={(el) => (sectionsRef.current[3] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("skills1")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("skills1List")}
            </motion.p>
          </motion.div>

          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("skills2")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("skills2List")}
            </motion.p>
          </motion.div>

          {/* Live Code Editor */}
          <motion.div className={styles.codeEditor} variants={itemVariants}>
            <div className={styles.editorHeader}>
              <div className={styles.editorButtons}>
                <span className={styles.close}></span>
                <span className={styles.minimize}></span>
                <span className={styles.maximize}></span>
              </div>
              <div className={styles.editorTitle}>skills.js</div>
            </div>
            <div className={styles.editorBody}>
              <motion.pre
                className={styles.codeBlock}
                animate={
                  codeAnimation
                    ? {
                        background: [
                          "rgba(0,255,255,0.1)",
                          "rgba(255,0,255,0.1)",
                          "rgba(0,255,255,0.1)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                {`const developer = {
  name: "Garen Ghazarian",
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Figma"]
  },
  passion: "Creating digital experiences",
  motto: "Code with purpose, build with passion"
};

console.log("🚀 Ready to build amazing things!");`}
              </motion.pre>
            </div>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>

      {/* Technical Skills Section 2 */}
      <motion.section
        ref={(el) => (sectionsRef.current[4] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("skills3")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("skills3List")}
            </motion.p>
          </motion.div>

          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("skills4")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("skills4List")}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>

      {/* Final Skills Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[5] = el)}
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("skills5")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("skills5List")}
            </motion.p>
          </motion.div>

          <motion.div className={styles.infoCard} variants={itemVariants}>
            <motion.h2 className={styles.cardTitle} variants={itemVariants}>
              {t("importantSkills")}
            </motion.h2>
            <motion.p className={styles.cardValue} variants={itemVariants}>
              {t("importantSkillsList")}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.bgImage} />
      </motion.section>

      {/* Easter Egg - Konami Code */}
      {showEasterEgg && (
        <motion.div
          className={styles.easterEgg}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className={styles.easterEggContent}>
            <h2>🎉 Konami Code Activated! 🎉</h2>
            <p>You found the secret! You&apos;re a true developer!</p>
            <div className={styles.secretCode}>
              <pre>{`// Secret Developer Mode Unlocked
const secretSkills = {
  debugging: "Expert Level",
  coffee: "Unlimited",
  motivation: "Always High",
  creativity: "Boundless"
};

console.log("Welcome to the inner circle! 🚀");`}</pre>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
