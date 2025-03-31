import styles from "./bottomsection.module.css";
import siFlag from "./../../assets/si-flag.svg";
import spFlag from "./../../assets/sp-flag.svg";
import frFlag from "./../../assets/fr-flag.svg";
import sendButton from "./../../assets/send-btn.svg";
import { use, useState } from "react";
import axios from "axios";

export default function BottomSection({
  isLoading,
  setIsLoading,
  msgs,
  setMsgs,
}) {
  const [lang, setLang] = useState("fr");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    const content = {
      language: lang,
      text: text,
    };

    const user_content = {
      message: text,
      role: "user",
    };

    setMsgs([...msgs, user_content]);
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:5000/translate", content)
      .then((response) => {
        if (response.data.success) {
          const result = {
            message: response.data.result,
            role: "system",
          };
          setMsgs([...msgs, user_content, result]);
        } else {
          const result = {
            message: "Something went wrong! 💔",
            role: "system",
          };
          setMsgs([...msgs, user_content, result]);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputText}>
          <input
            type="text"
            required={true}
            onChange={(e) => setText(e.target.value)}
            value={text}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </label>
        </div>
      </form>
    </div>
  );
}
