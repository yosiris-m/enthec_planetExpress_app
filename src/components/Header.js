import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import logo from "../../src/images/logo.png";
import styles from "./Header.module.scss";

function Header({ setFilterText, cart }) {
  return (
    <header className={styles.box}>
      <nav className={styles.topnav}>
        <Link to="/">
          <img src={logo} className={styles.topnav_logo} alt="imagen" />
        </Link>
        <div>
          <Link to="/cart" className={styles.cart}>
            <i className="fas fa-shopping-cart"></i>
            <span>Mi carrito</span>
            <span className={styles.cart_count}>{cart.length}</span>
          </Link>
        </div>
      </nav>

      <SearchBox onTextChange={(text) => setFilterText(text)} />
      <p className={styles.sendBox}>
        Envio gratis por compra superiores a 45.99€
      </p>
    </header>
  );
}
export default Header;
