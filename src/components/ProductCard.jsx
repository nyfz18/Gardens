// src/components/ProductCard.jsx
import React from 'react';
import FlipCard from './FlipCard';

const ProductCard = ({ id, image, name, species, description }) => {
  const frontContent = (
    <div className="product-card-front">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <i>{species}</i>
      </div>
    </div>
  );

  const backContent = (
    <div className="product-card-back">
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="back-button">Read More</button>
    </div>
  );

  return (
    <FlipCard frontContent={frontContent} backContent={backContent} />
  );
};

export default ProductCard;
