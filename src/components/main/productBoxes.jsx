import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const ProductBox = ({ product }) => {
  return (
    <>
      <div key={product.id} className="productBox">
        <h3>{product.name}</h3>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt="Kyoto" />
        </Link>
        <h6>Countries: <b>{product.countries.join(', ')}</b></h6>
        <h6>{product.duration}</h6>
        <div className="shortDescriptionBox">
          <p>{product.shortDescription}</p>
        </div>
        <p>Price: ${product.price}</p>
        <Link to={`/products/${product.id}`}>
          <Button variant="info">Learn more</Button>
        </Link>
      </div>
    </>
  );
};

export default ProductBox;
