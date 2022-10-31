import React from 'react'

export default function City({ city }) {
  return (
    <div className='ciudad'>
      <div className='container'>
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} °C</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Nubosidad: {city.clouds}</div>
          <div>Latitud: {city.latitud} °</div>
          <div>Longitud: {city.longitud} °</div>
        </div>
      </div>
    </div>
  )
};
