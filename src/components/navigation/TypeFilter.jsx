import React from "react";
import FilterByType from '../../data/FilterByType';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";

const TypeFilter = ({ type }) => {
  const filteredProducts = FilterByType(products, type);

  return (
    <>
      <h1 className="header"><b>Triad Travel:</b> {type}</h1>
      <div className="productBoxContainer">
        {filteredProducts.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default TypeFilter;
