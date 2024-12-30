"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./MySlide.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MySlide() {
  const [showIntro, setShowIntro] = useState(true);

  const t = useTranslations("Slides");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds for the intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {showIntro ? (
        <div className={styles.intro}>
          <h1 className={styles.introText}>Welcome to My Journey</h1>
        </div>
      ) : (
        <div className={styles.container}>
          <Swiper
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className={styles.swiper}
          >
            {[
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
            ].map((slide, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.src}
                    width={500}
                    height={500}
                    alt={`Slide ${index + 1}`}
                    className={styles.img}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <h2 className={styles.title}>{slide.title}</h2>
                  <p className={styles.text}>{slide.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
