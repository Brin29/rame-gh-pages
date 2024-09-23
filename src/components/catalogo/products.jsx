// Importar imágenes
import imagen1 from "../../assets/imagenes/imagen1.jpg";
import imagen2 from "../../assets/imagenes/imagen2.jpg";
import imagen3 from "../../assets/imagenes/imagen3.jpg";
import imagen4 from "../../assets/imagenes/imagen4.jpg";
import imagen5 from "../../assets/imagenes/imagen5.jpg";
import imagen6 from "../../assets/imagenes/imagen6.jpg";
import imagen7 from "../../assets/imagenes/imagen7.jpg";
import imagen8 from "../../assets/imagenes/imagen8.jpg";
import imagen9 from "../../assets/imagenes/imagen9.jpg";
import imagen10 from "../../assets/imagenes/imagen10.jpg";
import imagen11 from "../../assets/imagenes/imagen11.jpg";

// Productos importados
const products = [
  {
    id: 1,
    title: "Blusa con botones",
    price: 30.0,
    img: imagen1,
    category: "camisa",
    color: "blanco",
    size: "M",
    description: "Una blusa con botones de color blanco, ideal para ocasiones informales."
  },
  {
    id: 2,
    title: "Croptop botones",
    price: 20.0,
    img: imagen2,
    category: "croptop",
    color: "blanco",
    size: "S",
    description: "Un croptop con botones de color blanco, perfecto para el verano."
  },
  {
    id: 3,
    title: "Camisa elegante",
    price: 10.0,
    img: imagen3,
    category: "camisa",
    color: "rojo",
    size: "L",
    description: "Camisa elegante de color rojo, ideal para eventos formales."
  },
  {
    id: 4,
    title: "Camiseta casual",
    price: 20.0,
    img: imagen4,
    category: "camisa",
    color: "beige",
    size: "S",
    description: "Camiseta casual de color beige, perfecta para un look relajado."
  },
  {
    id: 5,
    title: "Camisa clásica",
    price: 40.0,
    img: imagen5,
    category: "camisa",
    color: "blanco",
    size: "M",
    description: "Una camisa clásica blanca que nunca pasa de moda."
  },
  {
    id: 6,
    title: "Blusón con botones",
    price: 50.0,
    img: imagen6,
    category: "camisa",
    color: "rosado",
    size: "L",
    description: "Blusón rosado con botones, ideal para un look cómodo y elegante."
  },
  {
    id: 7,
    title: "Corset de jeans",
    price: 30.0,
    img: imagen7,
    category: "corset",
    color: "azul",
    size: "M",
    description: "Corset de jeans que ajusta perfectamente y da forma al cuerpo."
  },
  {
    id: 8,
    title: "Corset elegante",
    price: 20.0,
    img: imagen8,
    category: "corset",
    color: "azul",
    size: "S",
    description: "Corset elegante que resalta la figura, ideal para salir de noche."
  },
  {
    id: 9,
    title: "Croptop",
    price: 40.0,
    img: imagen9,
    category: "croptop",
    color: "naranja",
    size: "M",
    description: "Croptop de color naranja, fresco y juvenil para el día a día."
  },
  {
    id: 10,
    title: "Buzo de tela",
    price: 35.0,
    img: imagen10,
    category: "chaqueta",
    color: "rosado",
    size: "L",
    description: "Buzo de tela suave, ideal para los días fríos."
  },
  {
    id: 11,
    title: "Traje de baño",
    price: 40.0,
    img: imagen11,
    category: "vestido-baño",
    color: "azul",
    size: "único",
    description: "Traje de baño azul, perfecto para disfrutar del sol y la playa."
  },
  {
    id: 12,
    title: "Chaqueta casual",
    price: 45.0,
    img: imagen10,
    category: "chaqueta",
    color: "azul",
    size: "M",
    description: "Chaqueta casual azul, ideal para complementar cualquier outfit."
  },
  // Nuevos productos
  {
    id: 13,
    title: "Vestido de verano",
    price: 60.0,
    img: imagen1, // Puedes cambiar la imagen
    category: "vestido",
    color: "floral",
    size: "M",
    description: "Vestido de verano con estampado floral, ligero y cómodo."
  },
  {
    id: 14,
    title: "Sudadera básica",
    price: 25.0,
    img: imagen2, // Cambiar imagen si es necesario
    category: "chaqueta",
    color: "gris",
    size: "L",
    description: "Sudadera básica gris, perfecta para un look casual."
  },
  {
    id: 15,
    title: "Falda midi",
    price: 35.0,
    img: imagen3, // Cambiar imagen si es necesario
    category: "falda",
    color: "negro",
    size: "S",
    description: "Falda midi negra, versátil y fácil de combinar."
  },
];

export default products;
