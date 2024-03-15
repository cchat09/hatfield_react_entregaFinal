import React from "react";
import FilterByType from '../../data/FilterByType';
import ProductBox from '../main/productBoxes';
import products from "../../data/products";

const GourmetFilter = () => {
    const europeProducts = FilterByType(products, 'gourmet');

    return (
        <>
            <h1 className="header"><b>Triad Travel:</b> Gourmet travel</h1>
            <div className="productBoxContainer">
                {europeProducts.map(product => (
                    <ProductBox key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default GourmetFilter;