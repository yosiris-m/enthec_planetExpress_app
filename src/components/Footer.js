import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.box}>
      <div className={styles.box_copy}>
        <span> Copyright &copy; 2021 Planet Express</span>
        <span className={styles.box_Author}>
          Desarrollo web:
          <a
            href="https://github.com/yosiris-m"
            className={styles.box_AuthorName}
            target="_blank"
            rel="noreferrer"
          >
            YosirisMariñez
          </a>
        </span>
      </div>
      <span className={styles.box_bar}>|</span>
      <Link to="/cart" className={styles.box_cart}>
        Cesta de compra
      </Link>
      <span className={styles.box_bar}>|</span>
      <Link to="/about-us" className={styles.box_aboutUs}>
        Acerca de nosotros
      </Link>
    </footer>
  );
}

export default Footer;
