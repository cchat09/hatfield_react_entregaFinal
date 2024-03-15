import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products'; 
import "./productDetails.css"

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  return (
    <>
      {product && (
        <div className="productDetail">
          <h2>{product.name}</h2>
          <img src={product.image} alt="Product" />
          <h6>Countries: {product.countries.join(', ')}</h6>
          <h6>{product.continent}</h6>
          <h6>Duration: {product.duration}</h6>
          <p>{product.longDescription}</p>
          <h6>Price: ${product.price}</h6>
          <h6>Tags: {product.types.join(', ')}</h6>
        </div>
      )}
    </>
  );
}

export default ProductDetail;