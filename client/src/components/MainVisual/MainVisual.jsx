import styles from "./mainvisual.module.css";
import worldMapImage from "./../../assets/world_map.svg";
import parrotImage from "./../../assets/parrot.svg";

export default function MainVisual() {
  return (
    <div className={styles.container}>
      <img className={styles.worldMap} src={worldMapImage} alt="" />
      <div className={styles.content}>
        <img src={parrotImage} alt="" height={95} width={85} />
        <div>
          <p className={styles.title}>PollyGlot</p>
          <p className={styles.slogan}>Perfect Translation Every Time</p>
        </div>
      </div>
    </div>
  );
}
