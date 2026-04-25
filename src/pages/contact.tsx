import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";

import { CONTACT_LINKS } from "../data/contactLinks";

function Contact() {
  return (
    <div className={sharedStyles.contentSection}>
      <h2 className={sharedStyles.sectionTitle}>// contact</h2>
      <div className={contactStyles.terminalBlock}>
        <p className={contactStyles.command}>$ ping kani --all</p>
        <div className={contactStyles.pingList}>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={contactStyles.pingLine}
            >
              <span className={contactStyles.pingLabel}>[{link.label}]</span>
              <span className={contactStyles.pingDots}>····</span>
              <span className={contactStyles.pingValue}>{link.value}</span>
              <span className={contactStyles.pingStatus}>200 OK</span>
            </a>
          ))}
        </div>
        <p className={contactStyles.pingFooter}>
          --- location: <span className={sharedStyles.accent}> Germany</span>{" "}
          ---
        </p>
      </div>
    </div>
  );
}
export default Contact;
