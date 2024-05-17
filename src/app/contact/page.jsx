"use client";
import styles from "./Contact.module.css";
import Tilt from 'react-parallax-tilt';

const Contact = () => {
  
  const store = {
    mobile: '+49 (0)15257398979',
    email: 'garenghazarian1@gmail.com',
    street: 'Ottilie-Hoffmann-Straße 40',
    city: 'Bremen',
    state: 'Bremen', 
    zipCode: '28213'
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        
        <Tilt
          className={styles.imageWrapper}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.5}
          scale={1.05}
        >
          <div className={styles.section}>
            <h2 className={styles.sectionHeader}>Contact Me</h2>
            <div>
              <p className={styles.p}>{store.street}</p>
              <p className={styles.p}>{store.city}, {store.zipCode}</p>
              <p className={styles.p}>Germany</p>
            </div>
            <div style={{ marginTop: '32px' }}>
              <p className={styles.p}>Mobile: <a className={styles.a} href={`tel:${store.mobile}`}>{store.mobile}</a></p>
              <p className={styles.p}>Email: <a className={styles.a} href={`mailto:${store.email}`}>{store.email}</a></p>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                className={styles.map}
                src={`https://www.google.com/maps?q=${encodeURIComponent(store.street + ', ' + store.city + ', ' + store.zipCode)}&output=embed`}
                allowFullScreen=""
                loading="lazy"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Contact;
