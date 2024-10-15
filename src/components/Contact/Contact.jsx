

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useTheme } from "../../common/ThemeContext";

export const Contact = () => {
  const { theme , toggleTheme} = useTheme();
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl(`contact/${theme === "dark" ? "mailDark" : "mailLight"}.png`)} alt="Email icon" onClick={toggleTheme} />
          <a href="mailto:sahaargha345@gmail.com">sahaargha345@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl(`contact/${theme === "dark" ? "linkedinDark" : "linkedinLight"}.png`)}
            alt="LinkedIn icon" onClick={toggleTheme}
          />
          <a href="https://in.linkedin.com/in/argha-saha-baa275272?trk=people-guest_people_search-card">linkedin.com/ArghaSaha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl(`contact/${theme === "dark" ? "githubDark" :"githubLight"}.png`)} alt="Github icon" onClick={toggleTheme} />
          <a href="https://github.com/arg387">https://github.com/arg387</a>
        </li>
      </ul>
    </footer>
  );
};
