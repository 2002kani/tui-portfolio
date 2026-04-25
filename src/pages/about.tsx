import aboutStyles from "../styles/about.module.css";
import sharedStyles from "../styles/shared.module.css";

import { SKILLS } from "../data/skills";

function About() {
  return (
    <div className={sharedStyles.contentSection}>
      <h2 className={sharedStyles.sectionTitle}>// about</h2>
      <div className={aboutStyles.splitLayout}>
        <div className={aboutStyles.bio}>
          <p className={aboutStyles.aboutText}>
            I am <span className={sharedStyles.accent}>Kani</span>, a full-stack
            developer with a focus on backend development using Java, Spring
            Boot, and microservice architecture. I’m also interested in software
            engineering standards and their implementation.
          </p>
          <div className={aboutStyles.skillsGrid}>
            {SKILLS.map((s) => (
              <div key={s} className={aboutStyles.skillTag}>
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className={aboutStyles.stats}>
          <div className={aboutStyles.statItem}>
            <span className={aboutStyles.statNumber}>2+</span>
            <span className={aboutStyles.statLabel}>Years of experience</span>
          </div>
          <div className={aboutStyles.statItem}>
            <span className={aboutStyles.statNumber}>25+</span>
            <span className={aboutStyles.statLabel}>Projects</span>
          </div>
          <div className={aboutStyles.statItem}>
            <span className={aboutStyles.statNumber}>C1</span>
            <span className={aboutStyles.statLabel}>English Level</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
