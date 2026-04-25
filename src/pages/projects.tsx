import sharedStyles from "../styles/shared.module.css";
import projectStyles from "../styles/projects.module.css";

import { PROJECTS } from "../data/projectList";

function Projects() {
  return (
    <div className={sharedStyles.contentSection}>
      <h2 className={sharedStyles.sectionTitle}>// projects</h2>
      <div className={projectStyles.projectsList}>
        {PROJECTS.map((p) => (
          <div key={p.name} className={projectStyles.projectItem}>
            <div className={projectStyles.projectHeader}>
              <p className={projectStyles.projectName}>▸ {p.name}</p>
              <a href={p.href} className={projectStyles.projectLink}>
                github →
              </a>
            </div>
            <p className={projectStyles.projectDesc}>{p.description}</p>
            <div className={projectStyles.projectTags}>
              {p.tags.map((t) => (
                <span key={t} className={projectStyles.tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
