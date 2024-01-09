"use client";
import styles from "./styles.module.css";

export default function SearchButton() {
  const searchOnEnter = (event: any) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      if (value) {
        window.location.href = `/search?q=${value}`;
      } else {
        alert(`Please input keywords to search!`);
      }
    }
  };
  return (
    <input
      className={styles.searchButton}
      type="text"
      placeholder="Search"
      onKeyDown={searchOnEnter}
    />
  );
}
