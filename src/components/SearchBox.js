import Button from "./Button";
import styles from "./SearchBox.module.scss";

function SearchBox({ onTextChange }) {
  return (
    <>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchBox_search}
          placeholder="Camisetas de invierno"
          onChange={(ev) => onTextChange(ev.target.value)}
        />
        <Button
          label={
            <>
              <i className="fa fa-search"></i>
              <span> Buscar</span>
            </>
          }
          to="/"
        />
      </div>
      <p className={styles.searchBox_send}>
        Envio gratis por compra superiores a 45.99€
      </p>
    </>
  );
}

export default SearchBox;
