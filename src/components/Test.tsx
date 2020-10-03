import React, { useEffect, useState } from "react";

export type answerTypes = "+" | "-";

interface Props {
  text: string;
  answers: answerTypes[];
  currentPos: number;
  inputRef: React.MutableRefObject<HTMLInputElement>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Test: React.FC<Props> = ({
  text,
  answers,
  currentPos,
  inputRef,
  handleKeyDown,
  handleBlur,
}) => {
  const defaultCursorStyle = "bg-dark text-light";

  const [active, setActive] = useState(false);
  const [cursorStyle, setCursorStyle] = useState(defaultCursorStyle);

  useEffect(() => {
    let timer =
      active &&
      setInterval(function () {
        const newStyle = cursorStyle === "" ? defaultCursorStyle : "";
        setCursorStyle(newStyle);
      }, 400);
    return () => {
      if (timer) clearInterval(timer);
    };
  });

  const letters = text.split("");
  const colorLetter = (letter: string, index: number) => {
    let color = "";
    if (!active) color = "text-muted";
    else if (index === currentPos) color = cursorStyle;
    else if (index < answers.length)
      color = answers[index] === "+" ? "text-success" : "text-danger";
    return (
      <span key={index} className={color}>
        {letter}
      </span>
    );
  };

  return (
    <>
      <input
        id="input"
        style={{
          opacity: 0,
          cursor: "default",
          zIndex: -1,
          position: "absolute",
        }}
        onKeyDown={data => {
          handleKeyDown(data);
          setCursorStyle(defaultCursorStyle);
        }}
        ref={inputRef}
        onBlur={data => {
          handleBlur(data);
          setActive(false);
        }}
      />
      <div
        className="container border py-3 text-center"
        onClick={() => {
          inputRef.current?.focus();
          setActive(true);
        }}
      >
        {letters.map((l, index) => colorLetter(l, index))}
      </div>
    </>
  );
};

export default Test;
