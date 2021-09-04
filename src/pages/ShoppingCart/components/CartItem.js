import { Link } from "react-router-dom";
import formatter from "../../../helpers/formatter";
import styles from "./CartItem.module.scss";

function CartItem({ article }) {
  return (
    <div className={styles.box}>
      <img src={article.image} alt="article" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.details_title}>
          <Link to={`/article/${article.id}`}>{article.name}</Link>
        </div>

        <div className={styles.details_price}>
          {formatter.format(article.price)}
          <span> (1 unidad)</span>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
