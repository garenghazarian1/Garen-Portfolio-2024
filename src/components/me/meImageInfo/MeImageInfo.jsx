"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import styles from './MeImageInfo.module.css';

export default function MeImageInfo() {
  return (
    <>
    <div className={styles.profileContainer}>
        <div className={styles.profileContainer1}>
            <div className={styles.imageSlider}>
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >  
                    <SwiperSlide className={styles.swiperSlide}>- Me Passport<Image src="/g01a.jpg" alt="Profile Image" width={500} height={500}  className={styles.img} /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>- Me Nature<Image src="/g02.jpg" alt="Profile Image" width={500} height={500} className={styles.img}/></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>- Me Grand Place<Image src="/g03.jpg" alt="Profile Image" width={500} height={500} className={styles.img}/></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>- Me Grand Place<Image src="/g01.jpg" alt="Profile Image" width={500} height={500} className={styles.img}/></SwiperSlide>
                </Swiper>
                
            </div>
            <div className={styles.imageSlider}>
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper">
              <SwiperSlide className={styles.swiperSlide1}>- My Name:<div className={styles.img}><h1 className={styles.infoH1}>Garen Ghazarian</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>- Profession:<div className={styles.img}><h1 className={styles.infoH1}>Full Stack Developer</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>- Hobbies:<div className={styles.img}><h1 className={styles.infoH1}>Coding, Cooking, Traveling</h1></div></SwiperSlide>
              </Swiper>
              </div>
            </div>
            <div className={styles.profileContainer1}>
            <div className={styles.info}>
                
                <p className={styles.infoP}><strong>Birthday:</strong> 01/01/1986</p>
                <p className={styles.infoP}><strong>Profession:</strong> Full Stack Developer</p>
                <p className={styles.infoP}><strong>Skills:</strong> JavaScript, React, Next.js, Node.js, MongoDB</p>
                <p className={styles.infoP}><strong>Hobbies:</strong> Coding, Cooking, Traveling</p>
                
                <div className={styles.socialLinks}>
                    
                    <a className={styles.infoA} href="/GAREN-CV-FIRST-PAGE-25-04-2024.pdf" target="_blank">Download Resume</a>
                    <a className={styles.infoA} href="https://www.linkedin.com/in/garen-ghazarian-1692812a5/" target="_blank">LinkedIn</a>
                    <a className={styles.infoA} href="https://github.com/garenghazarian1" target="_blank">GitHub</a>
                </div>
            </div>
            </div>
            </div>
    
    </>
  )
}
