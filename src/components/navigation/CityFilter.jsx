import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ProductBox from '../main/productBoxes';

const CityFilter = () => {
  const { cities } = useParams();
  const lowercaseCity = cities?.toLowerCase();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "products");
    
      console.log(cities);
      try {
        const querySnapshot = await getDocs(productsCollection);
        const fetchedProducts = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(product => product.cities.some(city => city.toLowerCase() === lowercaseCity));
      setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (cities) {
        fetchData();
    }
  }, [lowercaseCity, cities]);
  
  const titleCaseCity = cities
  ?.split("_")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")
  .replace(/\b\w/g, firstChar => firstChar.toUpperCase());

  if (!cities) {
    alert ("no match found!");
  }

return (
  <>
    <h1 className="header"><b>Triad Travel:</b> {titleCaseCity}</h1>
    <div className="productBoxContainer">
      {filteredProducts.map(product => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  </>
);
}

  export default CityFilter;