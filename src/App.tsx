import { useEffect, useState } from "react";

import { PAGES, type Page } from "./data/types";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import layoutStyles from "./styles/layout.module.css";
import navStyles from "./styles/nav.module.css";

function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  useEffect(() => {
    const handleKey = (e: globalThis.KeyboardEvent) => {
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
