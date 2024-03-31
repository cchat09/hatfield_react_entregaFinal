
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ProductBox from '../main/productBoxes';

const ContinentFilter = () => {
  const { continent } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const continentNames = {
    1: "Africa",
    2: "Americas",
    3: "Asia",
    4: "Europe",
    5: "Oceania"
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "products");

      try {
        const querySnapshot = await getDocs(productsCollection);
        const fetchedProducts = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(product => product.continent === parseInt(continent)); // Filter by continent
      setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [continent]);
  console.log(filteredProducts);
  return (
    <>
      <h1 className="header"><b>Triad Travel:</b> {continentNames[continent]}</h1>
      <div className="productBoxContainer">
        {filteredProducts.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ContinentFilter;

