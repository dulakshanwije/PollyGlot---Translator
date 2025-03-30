import TopSection from "../TopSection/TopSection";
import BottomSection from "../BottomSection/BottomSection";
import styles from "./mainsection.module.css";

export default function MainSection() {
  return (
    <div className={styles.container}>
      <TopSection />
      <BottomSection />
    </div>
  );
}
