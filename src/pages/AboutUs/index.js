import { useEffect, useState } from "react";
import getMembers from "../../services/get-members";
import Member from "./components/Member";
import styles from "./AboutUs.module.scss";

function AboutUs() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then((data) => {
      setMembers(data);
    });
  }, []);

  return (
    <section className={styles.box}>
      <h1 className={styles.name}>About Us!</h1>
      <div className={styles.members}>
        {members.map((member, idx) => (
          <Member member={member} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
