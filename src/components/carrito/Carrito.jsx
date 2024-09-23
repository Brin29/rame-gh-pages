import React, { useContext } from "react";
import { CartContext } from "../carrito/CartContext";
import classes from "./Carrito.module.css";

function Carrito() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, totalPrice, removeAllFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className={classes.carritoContainer}>
        <div className={classes.emptyCartContainer}>
          <h2>El carrito está vacío</h2>
          <img
            src="https://via.placeholder.com/150"
            alt="Carrito vacío"
            className={classes.imagenes}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.carritoContainer}>
      <h1>Tu Carrito</h1>

      <div className={classes.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={classes.cartItem}>
            <img src={item.img} alt={item.title} className={classes.cartImage} />

            <div className={classes.cartDetails}>
              <h2>{item.title}</h2>
              <p>Precio: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>

              <div className={classes.cartActions}>
                {/* Botón para disminuir la cantidad */}
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                {/* Botón para aumentar la cantidad */}
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>

            <button onClick={() => removeFromCart(item.id)} className={classes.removeItem}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className={classes.cartFooter}>
        <span className={classes.totalPrice}>Total: ${totalPrice.toFixed(2)}</span>
        <button className={classes.buyButton}>Comprar</button>
        <button className={classes.removeAllButton} onClick={removeAllFromCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default Carrito;
