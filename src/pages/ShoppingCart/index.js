import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import styles from "./ShoppingCart.module.scss";

function ShoppingCart({ cart }) {
  return (
    <div className={styles.shopping}>
      <h1>Mi carrito</h1>
      <h2>Productos en el carrito</h2>
      {cart.length ? (
        <section className={styles.wrapper}>
          <div className={styles.list}>
            {cart.map((article, idx) => (
              <CartItem key={idx} article={article} />
            ))}
          </div>

          <CartSummary cart={cart} />
        </section>
      ) : (
        <section className={styles.noArticles}>
          <i class="far fa-meh fa-3x"></i>
          <span>No has añadido artículos a tu cesta.</span>
          <Link to="/">Añadir artículos</Link>
        </section>
      )}
    </div>
  );
}

export default ShoppingCart;
