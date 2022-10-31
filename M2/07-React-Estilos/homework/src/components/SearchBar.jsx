import React from 'react';
import styles from './styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input type='text' placeholder='Ciudad...' className={styles.buscarCiudad} />
      <button
        onClick={() => onSearch('Buscando...')}
        className={styles.botonAgregarCiudad}>
        Agregar
      </button>
    </div>
  );
}


