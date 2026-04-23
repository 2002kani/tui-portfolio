import Cursor from "../components/cursor";
import { KANI_ASCII } from "../data/ascii";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles.homeCenter}>
      <pre className={styles.asciiArt}>{KANI_ASCII}</pre>
      <p className={styles.subtitle}>
        Software Developer &amp; Business-Economics student
        <br />
        <span className={styles.subtitleMuted}>Tui Inspired by theSa1</span>
        <Cursor />
      </p>
    </div>
  );
}

export default Home;
