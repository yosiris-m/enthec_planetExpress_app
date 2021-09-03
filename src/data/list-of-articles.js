import tShirtGray from "../images/camiseta_gris.jpg";
import tShirtRed from "../images/camiseta_roja.jpg";
import tShirt from "../images/camiseta.jpg";
import Cap from "../images/gorra_de_beisbol.jpg";
import winterSweatshirt from "../images/sudadera_invierno.jpg";
import sweatshirt from "../images/sudadera.jpg";
import cup from "../images/tasa.jpeg";

const listOfArticles = [
  {
    id: "1",
    name: "T-Shirt",
    color: "Gray",
    price: "150€ ",
    size: "M",
    image: tShirtGray,
    description: "material de algodón-poliester",
  },
  {
    id: "2",
    name: "T-Shirt",
    color: "Red",
    price: "80€ ",
    size: "L",
    image: tShirtRed,
    description: "material de algodón",
  },
  {
    id: "3",
    name: "T-Shirt",
    color: "black",
    price: "110€ ",
    size: "S",
    image: tShirt,
    description: "material de sintetica",
  },
  {
    id: "4",
    name: "Cap",
    color: "green",
    price: "30€ ",
    size: "oneSize",
    image: Cap,
    description: "material de poliester",
  },

  {
    id: "5",
    name: "T-Shirt",
    color: "tricolor",
    price: "30€ ",
    size: "M",
    image: sweatshirt,
    description: "material de algodón",
  },
  {
    id: "6",
    name: "Winter T-Shirt",
    color: "gray",
    price: "25 ",
    size: "s",
    image: winterSweatshirt,
    description: "material de algodón",
  },
  {
    id: "7",
    name: "Cup",
    color: "tricolor",
    price: "30€ ",
    size: "M",
    image: cup,
    description: "material de Gres",
  },
];

export default listOfArticles;
