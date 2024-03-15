import React from "react";
import FilterByType from '../../data/FilterByType';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";

const RomanticFilter = () => {
    const europeProducts = FilterByType(products, 'romantic');

    return (
        <>
            <h1 className="header"><b>Triad Travel:</b> Romantic travel</h1>
            <div className="productBoxContainer">
                {europeProducts.map(product => (
                    <ProductBox key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default RomanticFilter;