import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: '/images/californiapoppy.png',
    name: 'California Poppy',
    species: 'Eschscholzia californica', 
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
    species: 'Helianthus annuus', 
  },
  {
    image: '/images/hollyhock.jpg',
    name: 'Hollyhock',
    species: 'Alcea rosea', 
  },
  {
    image: '/images/nasturtium.jpg',
    name: 'Garden Nasturtium',
    species: 'Tropaeolum majus', 
  },
  {
    image: '/images/valerian.jpg',
    name: 'Valerian',
    species: 'Valeriana officinalis', 
  },
  {
    image: '/images/evergreencandy.jpg',
    name: 'Evergreen Candytuft',
    species: 'Iberis sempervirens',
  },
  {
    image: '/images/cornflower.jpeg',
    name: 'Cornflower',
    species: 'Centaurea cyanus',
  },
  {
    image: '/images/aconite.jpg',
    name: 'Aconite',
    species: 'Aconitum napellus', 
  },
];


const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
