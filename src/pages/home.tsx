import Cursor from "../components/cursor";
import { KANI_ASCII } from "../data/ascii";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles.homeCenter}>
      <pre className={styles.asciiArt}>{KANI_ASCII}</pre>
      <p className={styles.subtitle}>
        Software Developer <span style={{ color: "#00aa55" }}>&amp;</span>{" "}
        Business-Economics student
        <br />
        <span className={styles.subtitleMuted}>
          tui inspired portfolio site
        </span>
        <Cursor />
      </p>
    </div>
  );
}

export default Home;
