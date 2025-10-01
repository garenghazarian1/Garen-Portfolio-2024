"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MyProjects.module.css";
import { useTranslations } from "next-intl";

export default function MyProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const t = useTranslations("MyProjects");

  // Helper function to get features array
  const getFeatures = (projectKey) => {
    const features = t.raw(`projects.${projectKey}.features`);
    return Array.isArray(features) ? features : [];
  };

  const projects = [
    {
      id: "ken-beauty",
      title: t("projects.kenBeauty.title"),
      url: "https://kenbeautysalon.com/",
      description: t("projects.kenBeauty.description"),
      category: t("projects.kenBeauty.category"),
      image: "/projectsLogo/KENBeautyCenter.png",
      features: getFeatures("kenBeauty"),
    },
    {
      id: "eurojackpot",
      title: t("projects.eurojackpot.title"),
      url: "https://garenghazarian1.github.io/Eurojackpot/",
      description: t("projects.eurojackpot.description"),
      category: t("projects.eurojackpot.category"),
      image: "/projectsLogo/EurojackpotAnalyzer.png",
      features: getFeatures("eurojackpot"),
    },
    {
      id: "vartan-music",
      title: t("projects.musicPlatform.title"),
      url: "https://vartanghazarian.com/",
      description: t("projects.musicPlatform.description"),
      category: t("projects.musicPlatform.category"),
      image: "/projectsLogo/MusicPlatform.png",
      features: getFeatures("musicPlatform"),
    },
    {
      id: "babyban",
      title: t("projects.babyban.title"),
      url: "https://babyban.kids/",
      description: t("projects.babyban.description"),
      category: t("projects.babyban.category"),
      image: "/projectsLogo/BabyBan.png",
      features: getFeatures("babyban"),
    },
    {
      id: "baptism-invitation",
      title: t("projects.baptismInvitation.title"),
      url: "https://aniagatibaptism.vercel.app/",
      description: t("projects.baptismInvitation.description"),
      category: t("projects.baptismInvitation.category"),
      image: "/projectsLogo/Baptism.png",
      features: getFeatures("baptismInvitation"),
    },
    {
      id: "autopreisscheck",
      title: t("projects.autopreisscheck.title"),
      url: "https://www.autopreisscheck.de/",
      description: t("projects.autopreisscheck.description"),
      category: t("projects.autopreisscheck.category"),
      image: "/projectsLogo/Autopreisscheck.png",
      features: getFeatures("autopreisscheck"),
    },
    {
      id: "game-interface",
      title: t("projects.educationalGame.title"),
      url: "https://garenghazarian1.github.io/Kostas-Garen-group-project/#",
      description: t("projects.educationalGame.description"),
      category: t("projects.educationalGame.category"),
      image: "/projectsLogo/Educational.png",
      features: getFeatures("educationalGame"),
    },
    {
      id: "night-moon",
      title: t("projects.nightMoon.title"),
      url: "https://garenghazarian1.github.io/night-moon/#",
      description: t("projects.nightMoon.description"),
      category: t("projects.nightMoon.category"),
      image: "/projectsLogo/NightMoon.png",
      features: getFeatures("nightMoon"),
    },
    {
      id: "portfolio-old",
      title: t("projects.portfolioOld.title"),
      url: "https://garenghazarian1.github.io/portfolio-28-06-2023/index.html",
      description: t("projects.portfolioOld.description"),
      category: t("projects.portfolioOld.category"),
      image: "/projectsLogo/Portfolio.png",
      features: getFeatures("portfolioOld"),
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <span className={styles.category}>{project.category}</span>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className={styles.projectImage}
                priority={project.id === "ken-beauty"}
              />
              <div className={styles.imageOverlay}>
                <Link
                  href={project.url}
                  target="_blank"
                  className={styles.visitButton}
                >
                  {t("visitButton")}
                </Link>
              </div>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>{t("keyFeatures")}</h4>
                <ul className={styles.featuresList}>
                  {project.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
