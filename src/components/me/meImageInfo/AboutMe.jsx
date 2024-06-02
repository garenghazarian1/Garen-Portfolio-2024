"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <div className={styles.profileContainer}>
        
          <div className={styles.imageSlider}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              
              slidesPerView={'auto'}
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
                - My Name:
                
                  <h2 className={styles.infoH1}>Garen Ghazarian</h2>
               
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>
                - Birthday:
                
                  <h2 className={styles.infoH1}>01/01/1986</h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>
                - Profession:
               
                  <h2 className={styles.infoH1}>Full Stack Developer</h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>
                - Hobbies:
                
                  <h2 className={styles.infoH1}>Coding, Cooking, Traveling</h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide1}>
                - Skills 1:
                
                  <h2 className={styles.infoH1}>HTML, MARKUP</h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>
                - Skills 2:
                
                  <h2 className={styles.infoH1}>
                    CSS, BOOTSTRAP, TAILWIND, SASS, Responsive Design, Performance Optimization, Accessibility Standards ...
                  </h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>
                - Skills 3:
                
                  <h2 className={styles.infoH1}>REACT, VITE, NEXTJS, REACT NATIVE</h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide1}>
                - Skills 4:
               
                  <h2 className={styles.infoH1}>GIT, GITHUB, JAVASCRIPT, DOM, NODEJS, EXPRESS</h2>
                
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>
                - Skills 5:
                
                  <h2 className={styles.infoH1}>MONGODB, MONGOOSE, FIREBASE, API</h2>
               
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>
                - Important Skills:
                
                  <h2 className={styles.infoH1}>Problem solving, Team work</h2>
                
              </SwiperSlide>
            </Swiper>
          </div>
        
      </div>
    </>
  );
}
