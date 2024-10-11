import React, { useState } from 'react';
import './Card.css'; // Verifique se o caminho está correto

const Card = ({ character }) => {
  const [hovered, setHovered] = useState(false); // Estado para controlar se o mouse está sobre o card

  return (
    <div 
      className="circle" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logo">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </div>
      {hovered && (
        <div className="info-box">
          <h3>{character.name}</h3>
          <p>{character.description || 'Sem descrição disponível.'}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
