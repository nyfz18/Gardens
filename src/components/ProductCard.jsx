// ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, species }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <div className="product-info">
        <h3>{name}</h3>
        <i>{species}</i>
      </div>
    </div>
  );
};

export default ProductCard;
