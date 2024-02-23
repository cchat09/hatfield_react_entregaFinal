import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cartWidget.css'

function CartWidget () {
    return (
        <div className="widgetContainer">
            <i className="bi bi-cart-check"></i> <p>2</p>
        </div>
    )
}

export default CartWidget;