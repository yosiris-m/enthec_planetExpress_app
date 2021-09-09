import styles from "./Member.module.scss";

function Member({ member }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_box}>
        <img className={styles.img} src={member.img} alt="member" />
        <div className={styles.name}>Name: {member.name}</div>
      </div>
    </div>
  );
}
export default Member;
