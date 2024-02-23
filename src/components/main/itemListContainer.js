import React from 'react';
import products from '../../data/products';
import './itemListContainer.css'

function ItemListContainer () {
    return (
        <div className="productBoxContainer">
        {products.map(product => (
          <div key={product.id} className="productBox">
            <h2>{product.name}</h2>
            <img src={product.image} alt="Kyoto" />
            <h6>Countries: {product.countries.join(', ')}</h6>
            <p>{product.shortDescription}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>  
    );
}


export default ItemListContainer;