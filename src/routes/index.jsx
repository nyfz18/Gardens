import React from 'react';
import ProductList from '../components/ProductList'; // Adjust import path if necessary

const Index = () => {
  return (
    <div id="zero-state">
      <h1>Flowers</h1>
      <ProductList />
      <p>
        <i>Design a bouquet!</i>
      </p>
      <button onClick={() => alert('Redirecting...')}>
        Create Bouquet
      </button>
    </div>
  );
};

export default Index;
