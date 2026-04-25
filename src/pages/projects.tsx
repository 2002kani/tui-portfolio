import { useState } from "react";
import sharedStyles from "../styles/shared.module.css";
import projectStyles from "../styles/projects.module.css";
import { PROJECTS } from "../data/projectList";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Fullstack" },
] as const;

type Category = (typeof CATEGORIES)[number]["key"];

function Projects() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className={sharedStyles.contentSection}>
      <h2 className={sharedStyles.sectionTitle}>// projects</h2>

      <div className={projectStyles.filterBar}>
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            className={[
              projectStyles.filterBtn,
              active === key ? projectStyles.filterBtnActive : "",
            ].join(" ")}
            onClick={() => setActive(key)}
          >
            {label}
            <span className={projectStyles.filterCount}>
              {key === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === key).length}
            </span>
          </button>
        ))}
      </div>

      <div className={projectStyles.projectsList}>
        {filtered.map((p) => (
          <div key={p.name} className={projectStyles.projectItem}>
            <div className={projectStyles.projectHeader}>
              <p className={projectStyles.projectName}>▸ {p.name}</p>
              <a href={p.href} className={projectStyles.projectLink}>
                github →
              </a>
            </div>
            <p className={projectStyles.projectDesc}>{p.description}</p>
            <div className={projectStyles.projectTags}>
              {p.tags.map((t) =>
                t === "Legacy" ? (
                  <span key={t} className={projectStyles.legacyTag}>
                    {t}
                  </span>
                ) : (
                  <span key={t} className={projectStyles.tag}>
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
