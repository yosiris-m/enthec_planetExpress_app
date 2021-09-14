import Button from "../../components/Button";
import styles from "./Modal.module.scss";
import check from "../../images/check.jpg";

function Modal({ state, changesState }) {
  return (
    <>
      {state && (
        <div className={styles.windows}>
          <div className={styles.box}>
            <div className={styles.boxCheck}>
              <img src={check} alt="check" className={styles.check} />
              <h3>Se ha añadido un nuevo artículo a tu Cesta.</h3>
            </div>
            <Button label="Aceptar" onClick={() => changesState(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
