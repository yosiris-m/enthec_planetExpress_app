import styles from "./Member.module.scss";

function Member({ member }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.img} src={member.img} alt="member" />
        <div className={styles.name}>Name: {member.name}</div>
      </div>
    </div>
  );
}
export default Member;
