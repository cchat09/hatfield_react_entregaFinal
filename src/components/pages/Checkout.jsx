import React, {useState, useEffect} from 'react';
import { useCart } from '../../context/cartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./checkout.css"
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  // Access cart data and functions using the useCart hook
  const { cart, removeFromCart, clearCart, updateCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

 const payPopup = () => {
  Swal.fire({
    title: "Just kidding!",
    text: "You can't really purchase, because this is just a Javascript project!",
    icon: "error"
  });
 }
  // Function to handle removal of an item from the cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Done!",
          text: "Your cart has been cleared.",
          icon: "success"
        });
      }
    });
  };

  // Function to handle changes in the selected quantity
const handleQuantityChange = (event, item) => {
  const newQuantity = parseInt(event.target.value);
  // Find the item in the cart and update its quantity
  const updatedCart = cart.map((cartItem) => {
    if (cartItem.id === item.id) {
      return { ...cartItem, quantity: newQuantity };
    }
    return cartItem;
  });
  // Update the cart with the new quantity
  updateCart(updatedCart);
};

// Calculate total price
useEffect(() => {
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
  }, 0);
  setTotalPrice(totalPrice);
}, [cart]);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="checkoutItemsContainer">
          {cart.map((item) => (
              <Card style={{ width: '18rem' }}>
              <Link to={`/products/${item.id}`}>
                <Card.Img variant="top" src={item.image} key={item.id}/>
              </Link>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <div className="checkoutItemInfo">
                <div className="quantityContainer">
                <b>Quantity</b>
                <select value={item.quantity} onChange={(e) => handleQuantityChange(e, item)}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((quantity) => (
                      <option key={quantity} value={quantity}>{quantity}</option>
                    ))}
                  </select>
                  </div>
                  <b>Price: ${item.price * item.quantity}</b>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                </div>
              </Card.Body>
            </Card>
            // <li className="checkoutItem" key={item.id}>
            //   <div><h3>{item.name}</h3></div>
            //   <img src={item.image} alt={item.name} style={{ maxWidth: '200px' }} />
            //   <div className="checkoutItemInfo">
            //       <div>Quantity: {item.quantity}</div>
            //       <div>Price: ${item.price}</div>
            //       <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            //   </div>
            // </li>
          ))}
        </ul>
      )}
      <h4>Your total: ${totalPrice}</h4>
      <div className="checkoutFooter">
        <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
        <Button variant="info" onClick={() => payPopup()}>Proceed to Payment</Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
