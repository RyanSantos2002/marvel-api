// src/CharacterCard.js
import React, { useState } from 'react';
import './CharacterCard.css';

const CharacterCard = ({ name, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="circle">
        <div className="logo">
          <img src={image} alt={name} />
        </div>
        {isHovered && (
          <div className="info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
