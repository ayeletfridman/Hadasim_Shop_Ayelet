import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardPrice}>{price.toFixed(2)} ₪</p>
      </div>
    </div>
  );
};

export default Card;
