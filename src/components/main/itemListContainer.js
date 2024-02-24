import React from 'react';
import products from '../../data/products';
import './itemListContainer.css'
import { FormLabel } from 'react-bootstrap';

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
            <div className:productSelectContainer>
              <p>Number of travelers</p>
              <input type:text />
              <button className='addToCartButton'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>  
    );
}


export default ItemListContainer;