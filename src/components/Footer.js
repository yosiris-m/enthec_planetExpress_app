import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.box}>
      <Link to="/cart" className={styles.box_link}>
        Cesta de compra
      </Link>
      <Link to="/about-us" className={styles.box_link}>
        Acerca de nosotros
      </Link>
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
    </footer>
  );
}

export default Footer;
