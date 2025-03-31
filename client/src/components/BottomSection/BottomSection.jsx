import styles from "./bottomsection.module.css";
import siFlag from "./../../assets/si-flag.svg";
import spFlag from "./../../assets/sp-flag.svg";
import frFlag from "./../../assets/fr-flag.svg";
import sendButton from "./../../assets/send-btn.svg";
import { use, useState } from "react";

export default function BottomSection({ setIsLoading }) {
  const [lang, setLang] = useState("fr");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      language: lang,
      text: text,
    };

    // handleSubmit
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputText}>
          <input
            type="text"
            required={true}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">
            <img src={sendButton} alt="" />
          </button>
        </div>
        <div className={styles.langSelector}>
          <label htmlFor="french" className={lang == "fr" ? styles.active : ""}>
            <img src={frFlag} alt="" />
            <input
              type="radio"
              name="lang"
              id="french"
              onChange={(e) => setLang(e.target.value)}
              value="fr"
            />
          </label>
          <label
            htmlFor="spanish"
            className={lang == "sp" ? styles.active : ""}
          >
            <img src={spFlag} alt="" />
            <input
              type="radio"
              name="lang"
              id="spanish"
              onChange={(e) => setLang(e.target.value)}
              value="sp"
            />
          </label>
          <label
            htmlFor="sinhala"
            className={lang == "si" ? styles.active : ""}
          >
            <img src={siFlag} alt="" />
            <input
              type="radio"
              name="lang"
              id="sinhala"
              onChange={(e) => setLang(e.target.value)}
              value="si"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
