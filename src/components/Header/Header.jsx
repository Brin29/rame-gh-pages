import classes from "./Header.module.css";
import logo from "../../assets/imagenes/logo.jpg";

function Header() {
  return (
    <header className={classes.App_header}>
      <div className={classes.container_header}>
        <div className={classes.container_icon}>
          <a href="/">
            <img className={classes.img_tittle} src={logo} alt="logo_img" />
          </a>
        </div>
        <nav className={classes.links}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/catalogo">Catalogo</a>
            </li>
            <li>
              <a href="/usuario"><span class="material-symbols-outlined">account_circle</span></a>
            </li>
            <li>
              <a href="/carrito"><span className="material-symbols-outlined">shopping_cart</span></a>
            </li>
            <li>
              <a href="/favorito"><span class="material-symbols-outlined">favorite</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
