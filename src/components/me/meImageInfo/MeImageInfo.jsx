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
                className={styles.swiper}
            >  <div>
                    <SwiperSlide className={styles.swiperSlide}>- Me in EU p.<Image src="/g01a.jpg" alt="Profile Image" width={500} height={500}  className={styles.img} /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>- Me Nature<Image src="/g02.jpg" alt="Profile Image" width={500} height={500} className={styles.img}/></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>- Me Grand Place<Image src="/g03.jpg" alt="Profile Image" width={500} height={500} className={styles.img}/></SwiperSlide>
                    </div>  
                </Swiper>
                
            </div>
            <div className={styles.imageSlider1}>
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
        className={styles.swiper}>
              <SwiperSlide className={styles.swiperSlide1}>- My Name:<div className={styles.img}><h1 className={styles.infoH1}>Garen Ghazarian</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>- Birthday: <div className={styles.img}><h1 className={styles.infoH1}>01/01/1986</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>- Profession:<div className={styles.img}><h1 className={styles.infoH1}>Full Stack Developer</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>- Hobbies:<div className={styles.img}><h1 className={styles.infoH1}>Coding, Cooking, Traveling</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide1}>- Skills 1:<div className={styles.img}><h1 className={styles.infoH1}>HTML, MARKUP</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>- Skills 2:<div className={styles.img}><h1 className={styles.infoH1}>CSS, BOOTSTRAP, TAILWIND, SASS, Responsive Design,Performance Optimization,Accessibility Standards ...</h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>- Skills 3:<div className={styles.img}><h1 className={styles.infoH1}>REACT, VITE, NEXTJS, REACT NATIVE </h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide1}>- Skills 4:<div className={styles.img}><h1 className={styles.infoH1}>GIT, GITHUB, JAVASCRIPT, DOM, NODEJS, EXPRESS  </h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide2}>- Skills 5:<div className={styles.img}><h1 className={styles.infoH1}>MONGODB, MONGOOSE, FIREBASE, API </h1></div></SwiperSlide>
              <SwiperSlide className={styles.swiperSlide3}>- Important Skills :<div className={styles.img}><h1 className={styles.infoH1}>Problem solving, Team work</h1></div></SwiperSlide>
              </Swiper>
              </div>
      </div>
           {/* <div className={styles.profileContainer1}>
            <div className={styles.info}>
                
                 <p className={styles.infoP}><strong>Birthday:</strong>&nbsp;&nbsp;&nbsp;&nbsp; 01/01/1986</p>
                <p className={styles.infoP}><strong>Profession:</strong> Full Stack Developer</p>
                <p className={styles.infoP}><strong>Skills:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript, React, Next.js, Node.js, MongoDB</p>
                <p className={styles.infoP}><strong>Hobbies:</strong> &nbsp;&nbsp;&nbsp;&nbsp;Coding, Cooking, Traveling</p> 
                
                
            </div>
        </div>*/}
      </div>
    
    </>
  )
}
