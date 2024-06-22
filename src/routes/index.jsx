import React from 'react';
import ProductList from '../components/ProductList'; // Adjust import path if necessary

const Index = () => {
  return (
    <div id="zero-state">
      <h1>Flowers</h1>
      <ProductList />
      <p>
        <i>Load more...</i>
      </p>
    </div>
  );
};

export default Index;
