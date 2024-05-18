// components/ImageModal.js

import { motion } from 'framer-motion';
import styles from './ImageModal.module.css';
import Image from 'next/image';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: { y: '0', opacity: 1, transition: { delay: 0.2 } },
};

export default function ImageModal({ showModal, imageSrc, setShowModal }) {
  const closeModal = () => setShowModal(false);

  return (
    <motion.div
      className={styles.backdrop}
      variants={backdropVariants}
      initial="hidden"
      animate={showModal ? 'visible' : 'hidden'}
      onClick={closeModal}
    >
      <motion.div
        className={styles.modal}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt="Certification Image" layout="responsive" width={500} height={500} />
        </div>
        <button className={styles.closeButton} onClick={closeModal}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
