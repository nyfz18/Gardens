import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: '/images/californiapoppy.png',
    name: 'California Poppy',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
  },
  {
    image: '/images/sunflower.jpg',
    name: 'Sunflower',
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
