import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={"/images/pokeball.png"}
          width={"30"}
          height={"30"}
          alt={"PokeNext"}
        />
        <h1>PokeNext</h1>
      </div>

      <ul className={styles.link}>
        <li>
          <Link className={styles.link_items} href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link_items} href={"/about"}>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
