import React from 'react';

const ProductCard = ({ image, name, species }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h4>{name}</h4>
        <i>{ species }</i>
      </div>
    </div>
  );
};

export default ProductCard;
