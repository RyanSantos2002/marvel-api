// src/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Para estilos da barra lateral

const Sidebar = ({ characters }) => {
  return (
    <aside className="sidebar">
      <h2>Personagens</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
