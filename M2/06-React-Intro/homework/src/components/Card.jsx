import React from 'react';

export default function Card({ max, min, name, img, onClose }) {
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h4>{name}</h4>
      <p>Min {min}</p>
      <p>Max {max}</p>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='' />
    </div>
  );
}