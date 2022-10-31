import React from 'react';
import styles from "./styles/Card.module.css"

export default function Card({ max, min, name, img, onClose }) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.close}>X</button>
      <h4 className={styles.title}>{name}</h4>
      <span className={styles.temps}>
        <ul className={styles.list}>
          <li>
            <p>Min</p>{min}
          </li>
          <li>
            <p>Max</p>{max}
          </li>
        </ul>
      </span>
      <span className={styles.image}>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt='Weather Icon'
          className={styles.icon} />
      </span>
    </div>
  );
}