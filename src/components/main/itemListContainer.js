import React, { useState, useEffect } from 'react';
import './itemListContainer.css';
import ProductBox from './productBoxes';
import Header from './header';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function ItemListContainer () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');

      try {
        const querySnapshot = await getDocs(productsCollection);
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        //POTENTIAL FILTERS
        // .filter(product => product.price < 2500)
        // .filter(product => product.continent === 4);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="productBoxContainer">
        {loading ? (
          <h3>Loading journeys...</h3>
        ) : (
          products.map(product => (
            <ProductBox key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
  
}

export default ItemListContainer;
