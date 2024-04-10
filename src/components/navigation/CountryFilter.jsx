import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ProductBox from '../main/productBoxes';

const CountryFilter = () => {
  const { countries } = useParams();
  const lowercaseCountry = countries?.toLowerCase();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "products");
    
      console.log(countries);
      try {
        const querySnapshot = await getDocs(productsCollection);
        const fetchedProducts = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(product => product.countries.some(country => country.toLowerCase() === lowercaseCountry));  // Filter by type
      setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (countries) {
        fetchData();
    }
  }, [lowercaseCountry, countries]);
  
  const titleCaseCountry = countries
  ?.split("_")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")
  .replace(/\b\w/g, firstChar => firstChar.toUpperCase());

  if (!countries) {
    alert ("no match found!");
  }

return (
  <>
    <h1 className="header"><b>Triad Travel:</b> {titleCaseCountry}</h1>
    <div className="productBoxContainer">
      {filteredProducts.map(product => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  </>
);
}

  export default CountryFilter;