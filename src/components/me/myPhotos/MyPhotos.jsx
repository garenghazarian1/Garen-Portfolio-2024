"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { EffectFlip, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from "./MyPhotos.module.css";

const images = [
  "/g01a.jpg",
  "/g02.jpg",
  "/g03.jpg"
];

export default function MyPhotos() {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const handleSlideChange = (swiper) => {
    setBackgroundImage(images[swiper.activeIndex]);
  };

  return (
    <div className={styles.imageSlider} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Swiper
        effect="flip"
        grabCursor={true}
        flipEffect={{
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectFlip, Pagination]}
        className={styles.swiper}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/g01a.jpg" alt="Me in EU" layout="fill" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/g02.jpg" alt="Me in Nature" layout="fill" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/g03.jpg" alt="Me at Grand Place" layout="fill" className={styles.img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
