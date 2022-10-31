import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <nav>
      <div id='logoTitle'>
        <img src={Logo} alt='' id='logoHenry'></img>
        <h3 id='weatherAppTitle'>Henry - Weather App</h3>
      </div>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
