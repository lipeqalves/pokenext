import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus
          nemo consequatur illo itaque. Eveniet sint quidem error corrupti
          facilis maxime repellat nulla, commodi aliquid. Beatae corrupti
          obcaecati iure explicabo?
        </p>
        <Image
          src={"/images/charizard.png"}
          width={"300"}
          height={"300"}
          alt={"Charizard imagee"}
        />
        <ul className={styles.contato}>
          <li>
            <a className={styles.contato__item} href="https://github.com/lipeqalves" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className={styles.contato__item}
              href="https://www.linkedin.com/in/filipeqalves"
            >
              Linkdin
            </a>
          </li>
          <li>
            <a className={styles.contato__item} href="mailto:lipeqa@gmail.com" target="_blank">
              Email
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
