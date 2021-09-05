import { useState } from "react";
import styles from "./Newsletter.module.scss";
import NewsletterImage from "../images/newsletter.png";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleOnchange = (ev) => {
    setEmail(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.newsletter}>
        <img
          src={NewsletterImage}
          alt="newsletter"
          className={styles.newsletter_image}
        />
        {isSubscribed ? (
          <div>
            <p className={styles.newsletter_subtitle}>
              Gracias por suscribirte:
            </p>
            <p className={styles.newsletter_email}>{email}</p>
          </div>
        ) : (
          <div>
            <h3 className={styles.newsletter_title}>
              Subscribete a nuestra newsletter!
            </h3>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                className={styles.inputEmail}
                type="email"
                placeholder="email@.es"
                value={email}
                onChange={handleOnchange}
                required
              />
              <input
                type="submit"
                value="¡Suscribirme!"
                className={styles.subscribe}
              />
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
