import { useState } from "react";
import styles from "./Newsletter.module.scss";
import NewsletterImage from "../images/newsletter.png";
import Button from "./Button";
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
          <div className={styles.newsletter_subscribed}>
            <p className={styles.newsletter_subtitle}>
              Gracias por suscribirte:
            </p>
            <p className={styles.newsletter_email}>
              <i class="fa fa-envelope"></i> {email}
            </p>
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
              <Button type="submit" label="¡Suscribirme!" />
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
