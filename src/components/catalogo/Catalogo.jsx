import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Catalogo.module.css"; 
import { CartContext } from "../carrito/CartContext"; 
import products from "./products"; 

// Opciones de filtro disponibles
const filterOptions = {
  category: ["camisa", "chaqueta", "croptop", "corset", "vestido-baño"],
  color: ["blanco", "negro", "azul", "rosado", "gris", "naranja", "rojo", "beige"],
  size: ["S", "M", "L", "XL"],
};

function Catalogo() {
  const navigate = useNavigate(); 
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext); // Obtenemos funciones y estado del contexto del carrito

  // Estado para los filtros seleccionados
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: [],
    priceRange: [0, 100], // Rango de precios por defecto
  });

  // Estado para los productos favoritos
  const [favoriteItems, setFavoriteItems] = useState([]);

  // Cargamos los productos favoritos desde localStorage al iniciar el componente
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    setFavoriteItems(storedFavorites);
  }, []);

  // Función para agregar o eliminar un producto de los favoritos
  const toggleFavorite = (productId) => {
    const updatedFavorites = favoriteItems.includes(productId)
      ? favoriteItems.filter((id) => id !== productId) // Si ya está en favoritos, lo eliminamos
      : [...favoriteItems, productId]; // Si no está, lo agregamos
  
    setFavoriteItems(updatedFavorites); // Actualizamos el estado local
    localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites)); // Guardamos los cambios en localStorage
  };

  // Función para alternar los filtros seleccionados
  const toggleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value) // Si el valor ya está seleccionado, lo eliminamos
        : [...prev[type], value], // Si no está, lo agregamos
    }));
  };

  // Función para manejar el cambio de rango de precios
  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [0, Number(e.target.value)], // Actualizamos el rango de precios hasta el valor del input
    }));
  };

  // Función para limpiar todos los filtros
  const handleClearFilters = () => {
    setFilters({
      category: [],
      color: [],
      size: [],
      priceRange: [0, 100],
    });
  };

  // Filtramos los productos según los filtros seleccionados
  const filteredProducts = products.filter(
    (product) =>
      (filters.category.length === 0 || filters.category.includes(product.category)) &&
      (filters.color.length === 0 || filters.color.includes(product.color)) &&
      (filters.size.length === 0 || filters.size.includes(product.size)) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
  );

  // Función para comprobar si un producto está en el carrito y obtener su cantidad
  const isProductInCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    return product ? product.quantity : 0; // Retorna la cantidad o 0 si no está
  };

  // Función para manejar el clic en el botón del carrito (agregar o eliminar del carrito)
  const handleCartButtonClick = (product) => {
    if (isProductInCart(product.id)) {
      removeFromCart(product.id); // Si el producto ya está en el carrito, lo eliminamos
    } else {
      addToCart(product); // Si no está, lo agregamos
    }
  };

  // Renderizamos el componente
  return (
    <div className={classes.catalogoContainer}>
      {/* Sección de filtros */}
      <div className={classes.filterSection}>
        <h3>Filtrar por:</h3>
        {Object.keys(filterOptions).map((type) => (
          <div key={type} className={classes.filterGroup}>
            <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
            {filterOptions[type].map((option) => (
              <button
                key={option}
                className={filters[type].includes(option) ? classes.selected : ""} // Aplica clase si está seleccionado
                onClick={() => toggleFilter(type, option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)} {/* Capitaliza la primera letra */}
              </button>
            ))}
          </div>
        ))}
        <div className={classes.filterGroup}>
          <h4>Precio</h4>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[1]} // Valor del rango de precios superior
            onChange={handlePriceChange}
          />
          <span>{`Hasta $${filters.priceRange[1]}`}</span> {/* Muestra el valor del rango */}
        </div>
        <button className={classes.clearButton} onClick={handleClearFilters}>
          Borrar Filtros
        </button>
        <button
          className={classes.cartButton}
          onClick={() => navigate("/carrito")} // Navega al carrito
        >
          Ir al Carrito ({cartItems.length}) {/* Muestra la cantidad de artículos en el carrito */}
        </button>
      </div>

      {/* Sección de productos filtrados */}
      <div className={classes.catalogo}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`${classes.product_card} ${isProductInCart(product.id) ? classes.inCart : classes.fadeIn}`} // Aplica clase si el producto está en el carrito
          >
           {/* Botón para agregar a favoritos */}
           <button
            className={`${classes.favoriteButton} ${favoriteItems.includes(product.id) ? classes.liked : ''}`} // Aplica clase si es un favorito
            onClick={() => toggleFavorite(product.id)}>
            <span className="material-symbols-outlined">
              {favoriteItems.includes(product.id) ? 'favorite' : 'favorite_border'} {/* Cambia el ícono según si está en favoritos */}
            </span>
          </button>
            <img
              src={product.img} // Muestra la imagen del producto
              alt={product.title} // Texto alternativo para la imagen
              className={classes.product_image} // Clase de estilo para la imagen
            />
            <h2 className={classes.product_title}>{product.title}</h2> {/* Título del producto */}
            <p className={classes.product_price}>{`$${product.price.toFixed(2)} ARS`}</p> {/* Precio del producto */}
            <div className={classes.product_actions}>
              <button
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product } }) // Navega a la página del producto
                }
              >
                Comprar
              </button>
              {/* Botón para agregar al carrito */}
              <button
                className={`${classes.saveButton} ${isProductInCart(product.id) ? classes.inCartButton : ''}`} // Aplica clase si el producto está en el carrito
                onClick={() => handleCartButtonClick(product)} // Maneja el clic en el botón del carrito
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                {isProductInCart(product.id) && (
                  <span className={classes.cartCount}>
                    {cartItems.filter((item) => item.id === product.id).length} {/* Muestra la cantidad del producto en el carrito */}
                  </span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo; 
