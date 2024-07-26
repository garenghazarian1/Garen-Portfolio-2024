"use client";
import { useState } from "react";
import styles from "./BodyMassIndex.module.css";

export default function BodyMassIndex() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    return bmiValue.toFixed(2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    if (bmi >= 30) return "Obesity";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmiValue = calculateBMI(weight, height);
    setBmi(bmiValue);
    setCategory(getBMICategory(bmiValue));
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Weight (kg):
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Height (cm):
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div className={styles.result}>
            <h2 className={styles.bmiValue}>Your BMI: {bmi}</h2>
            <h3 className={styles.category}>Category: {category}</h3>
          </div>
        )}
      </div>
    </>
  );
}
