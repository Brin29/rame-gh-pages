import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../carrito/CartContext"; // Import CartContext
import classes from "./Descripcion.module.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Access addToCart function
  const { product } = location.state || {};

  // Default values if product or its properties are not provided
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedCategory, setSelectedCategory] = useState(product?.categories?.[0] || "");

  

  if (!product) return <div>Product not found</div>;

  const handleBuyNow = () => {
    navigate("/payment", {
      state: { product, selectedSize, selectedColor, selectedCategory },
    });
  };

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize, selectedColor, selectedCategory });
  };

  return (
    <div className={classes.productDetail}>
      <div className={classes.product_image_container}>
        <img
          src={product.img}
          alt={product.title}
          className={`${classes.product_image}`}
        />
      </div>
      <div className={classes.product_info}>
        <h2>{product.title}</h2>
        <p className={classes.price}>Precio: ${product.price}</p>

        {/* Description Section */}
        <div className={classes.description}>
          <label className={classes.selectorLabel}>Descripción: </label>
          <p>{product.description}</p>
        </div>

        {/* Size Selector */}
        <div className={classes.selector}>
          <label htmlFor="size" className={classes.selectorLabel}>Talla: </label>
          <p>{product.size}</p>
          {/* Here you could add a dropdown or selection component for sizes */}
        </div>

        {/* Color Selector */}
        <div className={classes.selector}>
          <label htmlFor="color" className={classes.selectorLabel}>Color: </label>
          <p>{product.color}</p>
          {/* Here you could add a dropdown or selection component for colors */}
        </div>

        {/* Category Selector */}
        <div className={classes.selector}>
          <label htmlFor="category" className={classes.selectorLabel}>Categoría: </label>
          <p>{product.category}</p>
        </div>

        <div className={classes.product_actions}>
          <button className={classes.buyNowButton} onClick={handleBuyNow}>
            Comprar Ahora
          </button>
          <button className={classes.backButton} onClick={() => navigate('/catalogo')}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className={classes.addToCartButton} onClick={handleAddToCart}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
