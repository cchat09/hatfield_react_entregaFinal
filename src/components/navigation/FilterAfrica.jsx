import React from "react";
import FilterByContinent from '../../data/FilterByContinent';
import products from "../../data/products";
import ProductBox from '../main/productBoxes';
import Header from "../main/header";

const AfricaFilter = () => {
    const europeProducts = FilterByContinent(products, 'Africa');

    return (
        <>
            <h1 className="header"><b>Triad Travel:</b> Africa</h1>
            <div className="productBoxContainer">
                {europeProducts.map(product => (
                    <ProductBox key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default AfricaFilter;