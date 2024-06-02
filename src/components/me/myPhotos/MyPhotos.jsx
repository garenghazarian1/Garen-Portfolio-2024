"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from "./MyPhotos.module.css"

export default function MyPhotos() {
  return (
    
        
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
            
            
  )
}
