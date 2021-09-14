import { Link } from "react-router-dom";
// import Button from "../../../components/Button";
import formatter from "../../../helpers/formatter";
import styles from "./CartItem.module.scss";

function CartItem({ article }) {
  return (
    <div>
      <div className={styles.box}>
        <img className={styles.box_image} src={article.image} alt="article" />
        <div className={styles.box_details}>
          <Link className={styles.box_title} to={`/article/${article.id}`}>
            {article.name}
          </Link>

          <div>
            {formatter.format(article.price)}
            <span> (1 unidad)</span>
          </div>
          {/* <Button label="X" /> */}
        </div>
      </div>
    </div>
  );
}
export default CartItem;
