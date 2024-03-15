import React, { useState, useEffect } from 'react';
import products from '../../data/products';
import './itemListContainer.css';
import ProductBox from './productBoxes';
import Header from './header';

function ItemListContainer() {
  const [loading, setLoading] = useState(true); // Loading state for product data

  useEffect(() => {
    // Simulate fetching product data
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(); // Resolve immediately, since we're using static data
        }, 2000);
      });
    };

    fetchData().then(() => {
      setLoading(false); // Set loading to false when data is fetched
    });
  }, []);

  return (
    <>
      <Header />
      <div className="productBoxContainer">
        {loading ? (
          <h3>Loading journeys...</h3>
        ) : (
          products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
