import React, { useEffect, useState } from "react";
import "./Test.module.scss";
import { AnswerTypes } from "types";

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
    if (!active) return "text-inactive";
    if (index === currentPos && cursor) return "text-highlight";
    if (index < answers.length)
      return answers[index] === "+" ? "text-correct" : "text-wrong";
    return "text-active";
  };

  return (
    <div
      className="test-textbox"
      onClick={() => {
        inputRef.current?.focus();
        setActive(true);
      }}
    >
      <input
        id="input"
        autoComplete="off"
        className="invisible-input"
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
      <div className="container text-center">
        {text.map((l, index) => (
          <span key={index} className={letterColor(index)}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Test;
