import React from 'react';
import {Link} from "react-router-dom";


const ProductBox = ({ product }) => {  
  return (
    <>
        <div key={product.id} className="productBox">
          <h2>{product.name}</h2>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt="Kyoto" />
            </Link> 
          <h6>Countries: <b>{product.countries.join(', ')}</b></h6>
          <h6>{product.duration}</h6>
          <p>{product.shortDescription}</p>
          <p>Price: ${product.price}</p>
        </div>
    </>
  );
};

export default ProductBox;
