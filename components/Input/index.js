import styles from "./input.module.css";

export default function Input({ onChange, value }) {
  return (
      <form className={styles.form}>
        <input
          className={styles.input}
          name="name"
          onChange={onChange}
          value={value}
        />
        <label className={styles.label} htmlFor="name">
          <span className={styles.span}>buscar pokemon</span>
        </label>
      </form>
  );
}
