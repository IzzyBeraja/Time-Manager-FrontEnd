import React, { useEffect, useState } from "react";
import { AnswerTypes } from "types";
import styles from "./Test.module.scss";

type Props = {
  text: string[];
  answers: AnswerTypes[];
  currentPos: number;
  inputRef: React.MutableRefObject<HTMLInputElement>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Test = ({
  text,
  answers,
  currentPos,
  inputRef,
  handleKeyDown,
  handleBlur,
}: Props) => {
  const [active, setActive] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const timer =
      active &&
      setInterval(function () {
        setCursor(!cursor);
      }, 400);
    return () => {
      if (timer) clearInterval(timer);
    };
  });

  const letterColor = (index: number) => {
    if (!active) return "textInactive";
    if (index === currentPos && cursor) return "textHighlight";
    if (index < answers.length)
      return answers[index] === "+" ? "textCorrect" : "textWrong";
    return "textActive";
  };

  return (
    <div
      className={styles.textbox}
      onClick={() => {
        inputRef.current?.focus();
        setActive(true);
      }}
    >
      <input
        id="input"
        autoComplete="off"
        className={styles.invisibleInput}
        onKeyDown={data => {
          handleKeyDown(data);
          setCursor(true);
        }}
        ref={inputRef}
        onBlur={data => {
          handleBlur(data);
          setActive(false);
        }}
      />
      <div className={`container ${styles.textCenter}`}>
        {text.map((l, index) => (
          <span key={index} className={styles[letterColor(index)]}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Test;
