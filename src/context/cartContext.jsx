import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    // Load cart from local storage on initial render
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

    const addToCart = (item) => {
          setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    }

    const updateCart = (newCart) => {
      setCart(newCart)
    }
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCart }}>
        {children}
      </CartContext.Provider>
    );
  };