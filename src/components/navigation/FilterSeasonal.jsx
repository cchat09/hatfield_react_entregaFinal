import React from "react";
import FilterByType from '../../data/FilterByType';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";

const SeasonalFilter = () => {
    const europeProducts = FilterByType(products, 'seasonal');

    return (
        <>
            <h1 className="header"><b>Triad Travel:</b> Seasonal travel (beach, ski, etc)</h1>
            <div className="productBoxContainer">
                {europeProducts.map(product => (
                    <ProductBox key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default SeasonalFilter;