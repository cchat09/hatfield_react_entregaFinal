import React from "react";
import FilterByContinent from '../../data/FilterByContinent';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";
import Header from "../main/header";

const EuropeFilter = () => {
  const europeProducts = FilterByContinent(products, 'Europe');

  return (
    <>
      <h1 className="header"><b>Triad Travel:</b> Europe</h1>
      <div className="productBoxContainer">
        {europeProducts.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default EuropeFilter;
