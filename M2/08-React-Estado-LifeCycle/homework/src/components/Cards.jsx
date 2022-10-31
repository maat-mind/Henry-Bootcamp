import React from 'react';
import Card from './Card.jsx';
import './Cards.css';

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className='cards'>
        {cities.map(c => <Card
          name={c.name}
          id={c.id}
          min={c.min}
          max={c.max}
          img={c.img}
          key={c.id}
          onClose={() => onClose(c.id)}
        />)}
      </div>
    );
  } else {
    return (
      <div>Sin ciudades</div>
    )
  }
}
