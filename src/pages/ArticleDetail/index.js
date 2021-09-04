import Countdown from "react-countdown";
import { Link, useParams } from "react-router-dom";
import formatter from "../../helpers/formatter";
import styles from "./ItemDetail.module.scss";

function ItemDetail({ articles, onAddToCart }) {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  const handleAddToCartClick = () => {
    onAddToCart(article);
  };

  return (
    <div className={styles.box}>
      <div>
        <img src={article.image} alt="tShirt" className={styles.box_image} />
        <div>
          <button className={styles.box_add} onClick={handleAddToCartClick}>
            Añadir a la cesta
          </button>
        </div>
      </div>
      <div className={styles.box_size}>
        <p className={styles.box_title}>{article.name}</p>
        <p className={styles.box_weight}>Peso: {article.weight} gr</p>
        <p className={styles.box_price}>
          Precio: {formatter.format(article.price)}
        </p>
        <p className={styles.box_description}>
          Material: {article.description}
        </p>
      </div>
      <Link to="#"></Link>
      <div className={styles.box_time}>
        <p>Esta oferta termina en:</p>
        <Countdown date={article.offerTimeout} className={styles.box_timeNow} />
      </div>
    </div>
  );
}

export default ItemDetail;
