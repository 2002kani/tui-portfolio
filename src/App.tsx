import { useEffect, useState } from "react";

import { PAGES, type Page } from "./data/types";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import layoutStyles from "./styles/layout.module.css";
import navStyles from "./styles/nav.module.css";

const SHUTDOWN_LINES = [
  "$ kill -9 $(pgrep portfolio)",
  "Terminating process...",
  "Saving session state... done",
  "Flushing buffers... done",
  "Closing file descriptors... done",
  "Session terminated. Goodbye.",
];

function App() {
  const [activePage, setActivePage] = useState<Page>("home");
  const [quitting, setQuitting] = useState(false);
  const [shownLines, setShownLines] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!quitting) return;
    if (shownLines < SHUTDOWN_LINES.length) {
      const t = setTimeout(() => setShownLines((n) => n + 1), 380);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setFadeOut(true), 600);
      return () => clearTimeout(t);
    }
  }, [quitting, shownLines]);

  useEffect(() => {
    if (!fadeOut) return;
    const t = setTimeout(() => {
      setQuitting(false);
      setShownLines(0);
      setFadeOut(false);
    }, 1200);
    return () => clearTimeout(t);
  }, [fadeOut]);

  useEffect(() => {
    const handleKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "q") {
        setQuitting(true);
        return;
      }
      const idx = PAGES.indexOf(activePage);
      if (e.key === "ArrowRight" && idx < PAGES.length - 1) {
        setActivePage(PAGES[idx + 1]);
      }
      if (e.key === "ArrowLeft" && idx > 0) {
        setActivePage(PAGES[idx - 1]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
    }
  };

  return (
    <div className={layoutStyles.root}>
      {quitting && (
        <div
          className={layoutStyles.shutdownOverlay}
          style={{ opacity: fadeOut ? 0 : 1 }}
        >
          <div className={layoutStyles.shutdownBox}>
            {SHUTDOWN_LINES.slice(0, shownLines).map((line, i) => (
              <p
                key={i}
                className={layoutStyles.shutdownLine}
                style={{ color: i === 0 ? "var(--color-accent)" : i === SHUTDOWN_LINES.length - 1 ? "#e8e8e8" : "#777" }}
              >
                {line}
              </p>
            ))}
            {shownLines < SHUTDOWN_LINES.length && (
              <span className={layoutStyles.cursor}>█</span>
            )}
          </div>
        </div>
      )}

      <nav className={navStyles.nav}>
        <span className={navStyles.brand}>Kani Karadag</span>
        <ul className={navStyles.links}>
          {PAGES.map((page) => (
            <li
              key={page}
              className={[
                navStyles.item,
                activePage === page ? navStyles.itemActive : "",
              ].join(" ")}
              onClick={() => setActivePage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <main className={layoutStyles.main}>
        <div className={layoutStyles.terminalBox}>{renderPage()}</div>
      </main>

      <footer className={layoutStyles.footer}>
        <p style={{ color: "#aaa" }}>
          Press &apos;q&apos; to quit &nbsp;|&nbsp; Use arrow keys to navigate
        </p>
      </footer>
    </div>
  );
}

export default App;
