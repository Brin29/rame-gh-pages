import React, { useEffect, useState } from "react";
import classes from "./Favoritos.module.css";

function Favoritos({ products }) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems")) || [];
      setFavoriteItems(storedFavorites);
    } catch (error) {
      console.error("Error leyendo productos favoritos desde localStorage", error);
      setFavoriteItems([]);
    }
  }, []);

  // Filtrar los productos que están en favoritos
  const favoriteProducts = products.filter((product) =>
    favoriteItems.includes(product.id)
  );

  return (
    <div className={classes.favoritesContainer}>
      <h1>Productos Favoritos</h1>
      <div className={classes.catalogo}>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div key={product.id} className={classes.productCard}>
              <img
                src={product.img}
                alt={product.title}
                className={classes.productImage}
              />
              <h2 className={classes.productTitle}>{product.title}</h2>
              <p className={classes.productPrice}>{`$${product.price.toFixed(2)} ARS`}</p>
            </div>
          ))
        ) : (
          <p className={classes.noo}>No tienes productos favoritos aún.</p>
        )}
      </div>
    </div>
  );
}

export default Favoritos;
