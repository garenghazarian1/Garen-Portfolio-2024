"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { EffectFlip, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./MyPhotos.module.css";

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
  const [backgroundImage, setBackgroundImage] = useState(images[0].src);
  const [caption, setCaption] = useState(images[0].description);

  const handleSlideChange = (swiper) => {
    setBackgroundImage(images[swiper.activeIndex].src);
    setCaption(images[swiper.activeIndex].description);
  };

  return (
    <div
      className={styles.imageSlider}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.caption}>
        <h2>{caption}</h2>
      </div>
      <Swiper
        effect="flip"
        grabCursor={true}
        flipEffect={{ slideShadows: true }}
        pagination={{ clickable: true }}
        modules={[EffectFlip, Pagination]}
        className={styles.swiper}
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className={styles.img}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
