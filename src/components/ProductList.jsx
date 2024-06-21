// ProductList.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: '/images/californiapoppy.png',
    name: 'California Poppy',
    species: 'Eschscholzia californica',
  },
  {
    id: 2,
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
    species: 'Helianthus annuus',
  },
  {
    id: 3,
    image: '/images/hollyhock.jpg',
    name: 'Hollyhock',
    species: 'Alcea rosea',
  },
  {
    id: 4,
    image: '/images/nasturtium.jpg',
    name: 'Garden Nasturtium',
    species: 'Tropaeolum majus',
  },
  {
    id: 5,
    image: '/images/valerian.jpg',
    name: 'Valerian',
    species: 'Valeriana officinalis',
  },
  {
    id: 6,
    image: '/images/evergreencandy.jpg',
    name: 'Evergreen Candytuft',
    species: 'Iberis sempervirens',
  },
  {
    id: 7,
    image: '/images/cornflower.jpeg',
    name: 'Cornflower',
    species: 'Centaurea cyanus',
  },
  {
    id: 8,
    image: '/images/aconite.jpg',
    name: 'Aconite',
    species: 'Aconitum napellus',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <ProductCard {...product} />
          <NavLink
            to={`/products/${product.id}`}
            className="product-link"
          >
            Learn more...
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
