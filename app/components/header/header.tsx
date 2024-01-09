import styles from "./styles.module.css";
import SearchButton from "../search-button/search-button";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <div>
          <span className={styles.mtg}>MTG</span>lossary
        </div>
        <SearchButton></SearchButton>
      </div>
    </div>
  );
}
