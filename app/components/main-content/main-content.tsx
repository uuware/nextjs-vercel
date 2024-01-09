import styles from "./styles.module.css";

export default function MainContent() {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <img src="placeholder.jpeg" style={{ width: "200px" }} />
        <img src="placeholder.jpeg" style={{ width: "200px" }} />
      </div>
      <div className={styles.right}>
        <div>ENG</div>
        <div>Deathtouch</div>
        <div>
          Evergreen keyword, Keyword Ability, Static ability Static ability that
          causes any amount of damage dealt by the source to a creature to be
          lethal damage
        </div>
      </div>
    </div>
  );
}
