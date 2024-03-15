import React from "react";
import FilterByContinent from '../../data/FilterByContinent';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";
import Header from "../main/header";

const AsiaFilter = () => {
  const europeProducts = FilterByContinent(products, 'Asia');

  return (
    <>
      <h1 className="header"><b>Triad Travel:</b> Asia</h1>
      <div className="productBoxContainer">
        {europeProducts.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default AsiaFilter;
