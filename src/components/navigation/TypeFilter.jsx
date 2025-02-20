import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductBox from '../main/productBoxes';

const TypeFilter = () => {
  const { type } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const typeNames = {
    1: "Culture and history",
    2: "Active and adventure",
    3: "Romantic getaways",
    4: "Seasonal (beach, ski, etc.)",
    5: "Gourmet"
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "products");

      try {
        const querySnapshot = await getDocs(productsCollection);
        const fetchedProducts = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(product => product.types.includes(parseInt(type))); // Filter by type
      setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [type]);
  console.log(filteredProducts);

return (
  <>
    <h1 className="header"><b>Triad Travel:</b> {typeNames[type]}</h1>
    <div className="productBoxContainer">
      {filteredProducts.map(product => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  </>
);
}

  export default TypeFilter;