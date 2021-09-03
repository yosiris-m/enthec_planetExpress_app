import { useState } from "react";
import "../styles/newsletter.scss";

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
    <div className="newsletter">
      {isSubscribed ? (
        <p>Te has suscrito a nuestra newsletter</p>
      ) : (
        <div>
          <h3>Subscribe to the newsletter!</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className=""
              placeholder="email"
              value={email}
              onChange={handleOnchange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}
