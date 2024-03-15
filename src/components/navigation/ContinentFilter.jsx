import React from "react";
import FilterByContinent from '../../data/FilterByContinent';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";

const ContinentFilter = ({ continent }) => {
  const filteredProducts = FilterByContinent(products, continent);

  return (
    <>
      <h1 className="header"><b>Triad Travel:</b> {continent}</h1>
      <div className="productBoxContainer">
        {filteredProducts.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ContinentFilter;
