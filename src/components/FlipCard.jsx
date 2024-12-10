// src/components/FlipCard.jsx
import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="card">
        <div className="card-front" onClick={handleClick}>
          {frontContent}
        </div>
        <div className="card-back" onClick={handleClick}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
