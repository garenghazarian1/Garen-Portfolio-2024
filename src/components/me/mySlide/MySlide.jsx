"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./MySlide.module.css";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function MySlide() {
  const t = useTranslations("Slides");
  return (
    <>
      <div className={styles.container}>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/001.png"
                width={500}
                height={500}
                alt="001.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("introduction.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>
                {t("introduction.text")}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/002.png"
                width={500}
                height={500}
                alt="002.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("earlyCareer.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>{t("earlyCareer.text")}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/003.png"
                width={500}
                height={500}
                alt="003.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("movingToBelgium.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>
                {t("movingToBelgium.text")}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/004.png"
                width={500}
                height={500}
                alt="004.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("personalLife.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>
                {t("personalLife.text")}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/005.png"
                width={500}
                height={500}
                alt="005.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("techInGermany.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>
                {t("techInGermany.text")}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/006.png"
                width={500}
                height={500}
                alt="006.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("currentProject.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>
                {t("currentProject.text")}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/007.png"
                width={500}
                height={500}
                alt="007.png"
                className={styles.img}
              />
            </div>
            <div className={styles.swiperSlideText}>
              <h2 className={styles.swiperSlideTextH}>
                {t("conclusion.title")}
              </h2>
              <p className={styles.swiperSlideTextP}>{t("conclusion.text")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
