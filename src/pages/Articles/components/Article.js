import { Link } from "react-router-dom";
import formatter from "../../../helpers/formatter";
import styles from "./Article.module.scss";

function Article({ item }) {
  return (
    <Link to={`/article/${item.id}`} className={styles.box_link}>
      <div className={styles.box}>
        <img
          src={item.image}
          className={styles.box_severalArticles}
          alt="imagen"
        />
        <div className={styles.box_title}>{item.name}</div>
        <div className={styles.box_price}>{formatter.format(item.price)}</div>
        <p className={styles.box_stock}>En stock</p>
      </div>
    </Link>
  );
}
export default Article;
