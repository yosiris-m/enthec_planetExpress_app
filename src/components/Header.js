import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import logo from "../../src/images/logo.png";
import styles from "./Header.module.scss";

function Header({ setFilterText, cart }) {
  return (
    <header>
      <div className={styles.topnav}>
        <Link to="/">
          <img src={logo} className={styles.topnav_logo} alt="imagen" />
        </Link>
        <div>
          <Link to="/cart" className={styles.topnav_cart}>
            <p className={styles.topnav_myCart}> Mi carrito</p>
            <div className={styles.topnav_cart1}>
              <span className={styles.topnav_count}> {cart.length}</span>
              <i className="searchCar_cart fas fa-shopping-cart fa-2x "></i>
            </div>
          </Link>
        </div>
      </div>

      <SearchBox onTextChange={(text) => setFilterText(text)} />
    </header>
  );
}
export default Header;
