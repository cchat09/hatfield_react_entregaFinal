import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cartWidget.css'
import { useCart } from '../../context/cartContext';

function CartWidget () {
    const { cart } = useCart();
    const TotalItemsInCart = cart.reduce((total, product) => total + product.quantity, 0);
    return (
        <div className="widgetContainer">
            <i className="bi bi-cart-check"></i> <p>{TotalItemsInCart}</p>
        </div>
    )
}

export default CartWidget;