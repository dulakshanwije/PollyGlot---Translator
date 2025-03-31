import TopSection from "../TopSection/TopSection";
import BottomSection from "../BottomSection/BottomSection";
import styles from "./mainsection.module.css";
import { useState } from "react";

export default function MainSection() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <TopSection isLoading={isLoading} />
      <BottomSection setIsLoading={setIsLoading} />
    </div>
  );
}
