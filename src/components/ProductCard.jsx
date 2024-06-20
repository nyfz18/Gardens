import React from 'react';

const ProductCard = ({ image, name }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
