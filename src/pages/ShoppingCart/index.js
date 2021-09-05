import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import styles from "./ShoppingCart.module.scss";

function ShoppingCart({ cart }) {
  return (
    <div className={styles.cart}>
      <h2 className={styles.cart_title}>Mi carrito</h2>

      {cart.length ? (
        <section className={styles.wrapper}>
          <div>
            <h3 className={styles.cart_subtitle}>Productos en el carrito</h3>
            <div className={styles.list}>
              {cart.map((article, idx) => (
                <CartItem key={idx} article={article} />
              ))}
            </div>
          </div>

          <CartSummary cart={cart} />
        </section>
      ) : (
        <section className={styles.noArticles}>
          <i className="far fa-meh fa-3x"></i>
          <span>No has añadido artículos a tu cesta.</span>
          <Link to="/">Añadir artículos</Link>
        </section>
      )}
    </div>
  );
}

export default ShoppingCart;
