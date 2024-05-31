"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./MySlide.module.css"
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function MySlide() {
  return (
    <>
    <div className={styles.container}>
      <Swiper
        pagination={{type: 'progressbar'}}
        navigation={true}
        modules={[Pagination, Navigation]}
         className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.swiperSlideImg}>
          <Image  src="/001.png"  width={500} height={500} objectFit alt='001.png' className={styles.img}   />
          </div> 
          <div className={styles.swiperSlideText}>
            <h2 className={styles.swiperSlideTextH}> 
              Introduction:</h2>
              <p className={styles.swiperSlideTextP}>Hello, I&apos;m Garen Ghazarian. Today is May 14, 2024. I was born in 1986 in the vibrant city of Qamishli, Syria. I&apos;m excited to share with you my journey from a law student and computer shop owner in Syria to a chef in Belgium, and now a full-stack developer in Germany.</p>
            
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.swiperSlideImg}>
        <Image  src="/002.png" width={250} height={250}  contain alt='002.png' className={styles.img} />
        </div>
        <div className={styles.swiperSlideText}>
          <p className={styles.swiperSlideTextP}>
             <span className={styles.swiperSlideTextSpan}>Early Career in Syria:</span><br />
            My professional journey began while I was studying law in Syria. During my studies, I also pursued my  passion for technology by opening and managing my own computer shop. This venture allowed me to repair and sell computer equipment, providing me with invaluable business and technical skills.</p>
        </div>
        </SwiperSlide>
        
        <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.swiperSlideImg}>
        <Image  src="/003.png" width={250} height={250} priority contain alt='003.png' className={styles.img} />
        </div>
        <div className={styles.swiperSlideText}>
          <p className={styles.swiperSlideTextP}>
             <span className={styles.swiperSlideTextSpan}>Moving to Belgium:</span><br />
                Destiny then took me to Belgium, where I initially worked in a restaurant. My dedication and love for culinary arts paid off quickly as I ascended to the position of chef. Within two years, my efforts helped transform our restaurant into the second-best in terms of quality across Belgium. It was a challenging yet rewarding experience that taught me a lot about perseverance and quality management.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.swiperSlideImg}>
        <Image  src="/004.png" width={250} height={250} priority contain alt='004.png' className={styles.img} />
        </div>
        <div className={styles.swiperSlideText}>
          <p className={styles.swiperSlideTextP}>
             <span className={styles.swiperSlideTextSpan}>Personal Life:</span><br />
            While in Belgium, I also met my partner, and we got married. This period of my life was rich with personal and professional growth.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.swiperSlideImg}>
        <Image  src="/005.png" width={250} height={250} priority contain alt='005.png' className={styles.img} />
        </div>
        <div className={styles.swiperSlideText}>
          <p className={styles.swiperSlideTextP}>
             <span className={styles.swiperSlideTextSpan}>Shifting Focus to Tech in Germany:</span><br />
              Later, my journey brought me to Germany, where I seized the opportunity to turn my long-time computer hobby into a formal education. I enrolled in the DCI Institute, where I studied to become a full-stack developer. Recently, I graduated and am currently engaged in a significant project.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.swiperSlideImg}>
        <Image  src="/006.png" width={250} height={250} priority contain alt='006.png' className={styles.img} />
        </div>
        <div className={styles.swiperSlideText}>
          <p className={styles.swiperSlideTextP}>
             <span className={styles.swiperSlideTextSpan}>Current Project:</span><br />
             I&apos;m now working on a challenging full-stack development project for a client from Abu Dhabi. The project involves creating a comprehensive application for a chain of beauty salons. This app organizes appointments, tracks monthly income, and automates calculations for two stores with 40 employees. It&rsquo;s designed to streamline operations and enhance business efficiency.</p>
        </div>
        </SwiperSlide>

        
        <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.swiperSlideImg}>
        <Image  src="/007.png" width={250} height={250} priority contain alt='007.png' className={styles.img} />
     </div> 
     <div className={styles.swiperSlideText}>
          <p className={styles.swiperSlideTextP}>
             <span className={styles.swiperSlideTextSpan}>Conclusion:</span><br />
              Looking ahead, I am eager to continue developing and leading projects that integrate technology with business needs to create innovative and effective solutions. My journey is a testament to the power of adapting to new opportunities and learning continuously. Thank you for watching, and I look forward to the next chapter of this exciting journey.</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}
