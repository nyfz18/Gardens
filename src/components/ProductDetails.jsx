// ProductDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        image: '/images/californiapoppy.png',
        name: 'California Poppy',
        species: 'Eschscholzia californica',
        description: 'The California poppy is a species of flowering plant in the family Papaveraceae, native to the United States and Mexico.'
    },
    {
        id: 2,
        image: '/images/sunflower.jpg',
        name: 'Sunflower',
        species: 'Helianthus annuus',
        description: 'Sunflowers are large, showy flowers that are native to North America. They are known for their tall stalks and bright yellow petals.'
    },
    {
        id: 3,
        image: '/images/hollyhock.jpg',
        name: 'Hollyhock',
        species: 'Alcea rosea',
        description: 'Hollyhocks are flowering plants that are known for their tall, spiky stems and colorful blossoms.'
    },
    // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <h1>{product.name}</h1>
      <h2>{product.species}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
