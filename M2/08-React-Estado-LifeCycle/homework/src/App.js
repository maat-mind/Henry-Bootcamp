import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

export default function App() {

  const [cities, setCities] = useState([]);
  const API_KEY = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(json => {
        if (json.main !== undefined) {
          const city = {
            id: json.id,
            name: json.name,
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            wind: json.wind.speed,
            temp: json.main.temp,
            longitude: json.coord.lon,
            latitude: json.coord.lat,
          }
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert('ciudad no encontrada');
        }
      })
      .catch(e => console.log(e))
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
