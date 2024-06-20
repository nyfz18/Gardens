import React from 'react';

const ProductCard = ({ image, name, species }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <i>{ species }</i>
      </div>
    </div>
  );
};

export default ProductCard;
