import "../styles/articles.scss";
import undershirtGray from "../images/camiseta_gris.jpg";
import undershirtRed from "../images/camiseta_roja.jpg";
import undershirt from "../images/camiseta.jpg";
import Cap from "../images/gorra_de_beisbol.jpg";
import winterSweatshirt from "../images/sudadera_invierno.jpg";
import sweatshirt from "../images/sudadera.jpg";
import cup from "../images/tasa.jpeg";

function Articles() {
  return (
    <>
      <h2>Nuestras ofertas Flash!!</h2>
      <div className="articles">
        <div>
          <img
            src={undershirtGray}
            className="articles_severalArticles"
            alt="imagen"
          />
          Camiseta color:Gray
        </div>
        <div>
          <img
            src={undershirtRed}
            className="articles_severalArticles"
            alt="imagen"
          />
          Camiseta color:Red
        </div>
        <div>
          <img
            src={undershirt}
            className="articles_severalArticles"
            alt="imagen"
          />
          Camiseta color:black
        </div>

        <div>
          <img src={Cap} className="articles_severalArticles" alt="imagen" />
          Gorra de besibol
        </div>
        <div>
          <img
            src={sweatshirt}
            className="articles_severalArticles"
            alt="imagen"
          />
          Sudadera de invierno
        </div>
        <div>
          <img
            src={winterSweatshirt}
            className="articles_severalArticles"
            alt="imagen"
          />
          camiseta de invierno
        </div>
        <div>
          <img src={cup} className="articles_severalArticles" alt="imagen" />
          Gorra de besibol
        </div>
      </div>
    </>
  );
}

export default Articles;
