import styles from "./messagebox.module.css";

export default function MessageBox({ message, role }) {
  if (role == "user") {
    return (
      <div className={styles.containerUser}>
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.containerSystem}>
        <p>{message}</p>
      </div>
    );
  }
}
