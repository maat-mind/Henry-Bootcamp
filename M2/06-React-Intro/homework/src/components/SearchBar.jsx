import React from 'react';

export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input type='text' placeholder='Ciudad...' />
      <button onClick={() => onSearch('Buscando...')}>Agregar</button>
    </div>
  );
}


