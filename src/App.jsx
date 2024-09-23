import "./App.css";
import Index from "./components/Main/main";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PerfilUsuario from "./components/PerfilUsuario/PerfilUsuario";
import Footer from "./components/footer/Footer";
import Catalogo from "./components/catalogo/Catalogo";
import PaymentPage from "./components/Descripcion_producto/Descripcion_producto";
import Carrito from "./components/carrito/Carrito";
import { CartProvider } from "./components/carrito/CartContext";
import Favoritos from "./components/Favoritos/Favoritos";
import products from "./components/catalogo/products"; 


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="usuario" element={<PerfilUsuario />} />
          <Route path="/product/:id" element={<PaymentPage />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/favorito" element={<Favoritos products={products} />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

