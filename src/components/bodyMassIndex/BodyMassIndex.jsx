"use client";
import { useState } from "react";
import styles from "./BodyMassIndex.module.css";
import Image from "next/image";

export default function BodyMassIndex() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    return bmiValue.toFixed(2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setDescription(
        "You are underweight. It’s important to eat a balanced diet and maintain a healthy lifestyle."
      );
      setImage("/BMI/underweight.webp");
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      setDescription(
        "You have a normal weight. Keep up with a balanced diet and regular exercise."
      );
      setImage("/BMI/normalWeight.webp");
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      setDescription(
        "You are overweight. Consider a healthy diet and regular physical activity."
      );
      setImage("/BMI/overweight.webp");
      return "Overweight";
    }
    if (bmi >= 30) {
      setDescription(
        "You are obese. It’s important to consult with a healthcare provider for personalized advice."
      );
      setImage("/BMI/obesity.webp");
      return "Obesity";
    }
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
        <p className={styles.description}>
          Body Mass Index (BMI) is a measure that uses your height and weight to
          work out if your weight is healthy. The BMI calculation divides an
          adult&apos;s weight in kilograms by their height in meters squared.
          The BMI ranges are based on the effect excess body fat has on disease
          and death.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <p className={styles.description}>{description}</p>
            {image && (
              <Image
                src={image}
                alt={category}
                width={500}
                height={500}
                className={styles.image}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
