"use client";
import React, { useState } from 'react';
import styles from "./Qualification.module.css";
import { motion } from 'framer-motion';
import Image from 'next/image';
import ImageModal from '@/components/modal/ImageModal';

const certifications = [
    {
        title: 'Further training as a web and software developer',
        issuer: 'DCI Digital Career Institute gGmbH',
        date: '06/2024',
        description: 'Folgende berufspraktische und theoretische Schulungen hat der Teilnehmende bereits absolviert:',
        image: '/Dci01GermanA.jpg'
      },
    {
        title: 'Testing Center for Professions',
        issuer: 'DCI Digital Career Institute gGmbH',
        date: '04/2023',
        description: 'Während der Maßnahme hat der Teilnehmende berufspraktische und theoretisch Schulungen in der Bereichen Web-Development und Online Marketing absolviert.',
        image: '/Dci01German.jpg'
      },
  {
    title: 'Certified German Language B1',
    issuer: 'telc',
    date: '11/22',
    description: 'DEUTSCH-TEST FÜR ZUWANDERER.',
    image: '/b1.jpg'
  },
  {
    title: 'Bachelor of Laws',
    issuer: 'University of Damascus Syria',
    date: '09/2011',
    description: 'Bachelor of Laws',
    image: '/lawFrench.jpg'
  },
  
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

export default function Qualification() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      <motion.section 
        className={styles.qualifications}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className={styles.heading}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Certifications
        </motion.h2>
        <motion.div className={styles.certifications}>
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className={styles.certificationCard}
              variants={itemVariants}
              whileHover={hoverVariants.hover}
              onClick={() => openModal(cert.image)}
            >
              <div className={styles.imageWrapper}>
                <Image src={cert.image} alt={cert.title} width={250} height={250} className={styles.certImage} />
              </div>
              <h3 className={styles.title}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <p className={styles.date}>{cert.date}</p>
              <p className={styles.description}>{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {showModal && <ImageModal showModal={showModal} imageSrc={modalImage} setShowModal={setShowModal} />}
    </div>
  );
}
