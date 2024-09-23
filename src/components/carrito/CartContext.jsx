import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext();

export function CartProvider({ children }) {
  // Inicializar el carrito con los datos almacenados en localStorage o con un arreglo vacío
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Efecto para guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito o incrementar su cantidad
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Función para reducir la cantidad de un producto o eliminarlo si llega a 0
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === id);
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Función para eliminar todos los productos del carrito
  const removeAllFromCart = () => {
    setCartItems([]);
  };

  // Calcular el total del carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, removeAllFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
