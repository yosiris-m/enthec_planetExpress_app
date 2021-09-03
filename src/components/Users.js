import { useState } from "react";
import "../styles/users.scss";

function Users() {
  const [newsletter, setNewsletter] = useState("");

  const handleOnchange = (ev) => {
    const sendNewsletter = ev.target.value;
    setNewsletter(sendNewsletter);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setNewsletter(newsletter);

    console.log(newsletter);
  };

  return (
    <>
      <div className="users">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className=""
            placeholder="email"
            value={newsletter}
            onChange={handleOnchange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Users;
