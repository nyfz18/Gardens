import React from 'react';

export default function Index() {
  return (
    <div id="zero-state">
      <p>
        <i>Design a bouquet!</i>
      </p>
      <button onClick={() => alert('Redirecting...')}>
        Create Bouquet
      </button>
    </div>
  );
}
