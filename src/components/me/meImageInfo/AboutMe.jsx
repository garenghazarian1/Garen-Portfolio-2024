"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const t = useTranslations("AboutMe");
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.imageSlider}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide1}>
              {t("myName")}
              <h2 className={styles.infoH1}> {t("name")}</h2>
              {t("birthday")}
              <h2 className={styles.infoH1}>{t("birthDate")}</h2>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide2}>
              {t("profession")}
              <h2 className={styles.infoH1}>{t("professionTitle")}</h2>
              {t("hobbies")}
              <h2 className={styles.infoH1}>{t("hobbyList")}</h2>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide3}>
              {t("skills1")}
              <h2 className={styles.infoH1}>{t("skills1List")}</h2>
              {t("skills2")}
              <h2 className={styles.infoH1}>{t("skills2List")}</h2>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide1}>
              {t("skills3")}
              <h2 className={styles.infoH1}>{t("skills3List")}</h2>
              {t("skills4")}
              <h2 className={styles.infoH1}>{t("skills4List")}</h2>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide2}>
              {t("skills5")}
              <h2 className={styles.infoH1}>{t("skills5List")}</h2>
              {t("importantSkills")}
              <h2 className={styles.infoH1}>{t("importantSkillsList")}</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
