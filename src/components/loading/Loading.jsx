"use client";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}
