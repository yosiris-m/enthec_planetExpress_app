import tShirtGray from "../images/camiseta_gris.jpg";
import tShirtRed from "../images/camiseta_roja.jpg";
import tShirt from "../images/camiseta.jpg";
import Cap from "../images/gorra_de_beisbol.jpg";
import winterSweatshirt from "../images/sudadera_invierno.jpg";
import sweatshirt from "../images/sudadera.jpg";
import cup from "../images/taza.jpeg";
import sweatshirtBlack from "../images/SUDADERA.jpg";
const listOfArticles = [
  {
    id: "1",
    name: "T-Shirt",
    weight: 150,
    image: tShirtGray,
    description: "de algodón-poliester",
    price: 20,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },
  {
    id: "2",
    name: "T-Shirt",
    weight: 300,
    image: tShirtRed,
    description: "de algodón",
    price: 10,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },
  {
    id: "3",
    name: "T-Shirt",
    weight: 200,
    image: tShirt,
    description: " de sintetica",
    price: 9,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },
  {
    id: "4",
    name: "Cap",
    weight: 100,
    image: Cap,
    description: "de poliester",
    price: 5,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },

  {
    id: "5",
    name: "T-Shirt",
    weight: "80gr ",
    image: sweatshirt,
    description: "de algodón",
    price: 6,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },
  {
    id: "6",
    name: "Winter T-Shirt",
    weight: 1000,
    image: winterSweatshirt,
    description: "de algodón",
    price: 35,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },
  {
    id: "7",
    name: "Cup",
    weight: 20,
    image: cup,
    description: " de Gres",
    price: 1,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },

  {
    id: "8",
    name: "sweatshirt",
    weight: 20,
    image: sweatshirtBlack,
    description: " de Gres",
    price: 1,
    currency: "EUR",
    offerTimeout: Date.now() + 1800000,
  },
];

export default listOfArticles;
