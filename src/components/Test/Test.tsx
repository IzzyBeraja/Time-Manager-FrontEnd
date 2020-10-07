import React, { useEffect, useState } from "react";
import "./Test.scss";
import { AnswerTypes } from "types";

type Props = {
  text: string;
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
  const [cursorStyle, setCursorStyle] = useState("");

  useEffect(() => {
    let timer =
      active &&
      setInterval(function () {
        setCursorStyle(cursorStyle ? "" : "text-highlight");
      }, 400);
    return () => {
      if (timer) clearInterval(timer);
    };
  });

  const letters = text.split("");
  const colorLetter = (letter: string, index: number) => {
    let color = "text-active";
    if (!active) color = "text-inactive";
    else if (index === currentPos) color = cursorStyle;
    else if (index < answers.length)
      color = answers[index] === "+" ? "text-correct" : "text-wrong";
    return (
      <span key={index} className={color}>
        {letter}
      </span>
    );
  };

  return (
    <div
      className="test-text"
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
          setCursorStyle("text-highlight");
        }}
        ref={inputRef}
        onBlur={data => {
          handleBlur(data);
          setActive(false);
        }}
      />
      <div className="text-center">
        {letters.map((l, index) => colorLetter(l, index))}
      </div>
    </div>
  );
};

export default Test;
