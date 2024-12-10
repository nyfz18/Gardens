// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

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
  {
    id: 4,
    image: '/images/nasturtium.jpg',
    name: 'Garden Nasturtium',
    species: 'Tropaeolum majus',
    description: 'The garden nasturtium is a flowering plant in the family Tropaeolaceae, native to South and Central America.'
  },
  {
    id: 5,
    image: '/images/valerian.jpg',
    name: 'Valerian',
    species: 'Valeriana officinalis',
    description: 'Valerian is a perennial flowering plant in the family Caprifoliaceae, native to Europe and Asia.'
  },
  {
    id: 6,
    image: '/images/evergreencandy.jpg',
    name: 'Evergreen Candytuft',
    species: 'Iberis sempervirens',
    description: 'The evergreen candytuft is a flowering plant in the family Brassicaceae, native to southern Europe.'
  },
  {
    id: 7,
    image: '/images/cornflower.jpeg',
    name: 'Cornflower',
    species: 'Centaurea cyanus',
    description: 'The cornflower is a flowering plant in the family Asteraceae, native to Europe.'
  },
  {
    id: 8,
    image: '/images/aconite.jpg',
    name: 'Aconite',
    species: 'Aconitum napellus',
    description: 'Aconite is a genus of flowering plants belonging to the family Ranunculaceae, native to mountainous regions of the Northern Hemisphere.'
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
