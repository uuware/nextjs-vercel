import styles from "./styles.module.css";
import Header from "../header/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.defaultLayout}>
      <Header></Header>
      <div className={styles.mainContent}>{children}</div>
    </main>
  );
}
