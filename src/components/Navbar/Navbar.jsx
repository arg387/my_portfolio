
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useTheme } from "../../common/ThemeContext";
import { useState } from "react";
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {theme, toggleTheme} = useTheme();




  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a className={styles.title} href="/">
        Portfolio
        </a>
        <div className={styles.themeChangerContainer}>
          <img
            src={getImageUrl(`hero/${theme === "light" ? "sun" : "moon"}.png`)}
            alt="image of color mode"
            className={styles.colorMode}
            onClick={toggleTheme}
          />
        </div>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}onClick={() => setMenuOpen(false)}> 
          <li>
            <Link to="experience" smooth={true} duration={3000}>Expertise</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={3000}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={3000}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
