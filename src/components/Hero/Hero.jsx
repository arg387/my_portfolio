

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Argha Saha</h1>
        <p className={styles.description}>
        I am a recent graduate with a Bachelor’s degree in Computer Science and engineering. I am eager to apply academic knowledge and develop practical skills in creating innovative and intelligent user experiences. Reach out if you&apos;d like to learn more!
        </p>
        <div>
          <a href="mailto:sahaargha345@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a><a href={getImageUrl("hero/Argha_CV.pdf")} download className={styles.contactBtn}>CV</a>
        </div>
        

      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
