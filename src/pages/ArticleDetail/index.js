import Countdown from "react-countdown";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import formatter from "../../helpers/formatter";
import styles from "./ArticleDetail.module.scss";

function ArticleDetail({ articles, onAddToCart }) {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  const handleAddToCartClick = () => {
    onAddToCart(article);
  };

  return (
    <section className={styles.box}>
      <img src={article.image} alt="tShirt" className={styles.box_image} />
      <div>
        <Button label="Añadir a la cesta" onClick={handleAddToCartClick} />
      </div>
      <div className={styles.box_container}>
        <p className={styles.box_title}>{article.name}</p>
        <p className={styles.box_weight}>Peso: {article.weight} gr</p>
        <p className={styles.box_description}>
          Material: {article.description}
        </p>
        <p className={styles.box_price}>
          Precio: {formatter.format(article.price)}
        </p>
      </div>

      <Link to="#"></Link>
      <div className={styles.box_time}>
        <p>Esta oferta termina en:</p>
        <Countdown date={article.offerTimeout} className={styles.box_timeNow} />
      </div>
    </section>
  );
}

export default ArticleDetail;
