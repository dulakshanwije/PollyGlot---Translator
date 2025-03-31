import { useEffect, useRef } from "react";
import MessageBox from "../MessageBox/MessageBox";
import styles from "./topsection.module.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import PulseLoader from "react-spinners/PulseLoader";

const msgs = [
  {
    message: "Hello! How can I assist you today?",
    role: "system",
  },
  {
    message: "I need help with debugging my React app.",
    role: "user",
  },
  {
    message:
      "Sure! Could you provide more details about the issue you’re facing?",
    role: "system",
  },
  {
    message:
      "Yes, I'm getting an error saying 'Module not found: Can't resolve react-router-dom'.",
    role: "user",
  },
  {
    message:
      "It looks like you haven't installed react-router-dom. Try running `npm install react-router-dom` in your project directory.",
    role: "system",
  },
];

export default function TopSection({ isLoading, msgs }) {
  const sRef = useRef(null);

  useEffect(() => {
    if (sRef.current) {
      const sEle = sRef.current.getScrollElement();
      sEle.scrollTop = sEle.scrollHeight;
    }
  }, [msgs]);

  return (
    <>
      <SimpleBar ref={sRef} className={styles.SimpleBar}>
        <div className={styles.container}>
          {msgs.map((msg, key) => (
            <MessageBox message={msg.message} role={msg.role} key={key} />
          ))}
        </div>
        {isLoading ? (
          <PulseLoader className={styles.PulseLoader} cssOverride={true} />
        ) : (
          ""
        )}
      </SimpleBar>
    </>
  );
}
