import React, { useEffect, useRef } from "react";

interface Props {
  text: string;
  answers: string;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Test: React.FC<Props> = ({ text, answers, handleKeyDown }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const letters = text.split("");

  useEffect(() => {
    inputRef?.current?.focus();
  });

  const colorLetter = (letter: string, index: number) => {
    let color = "";
    if (index < answers.length) {
      color = answers[index] === "+" ? "text-success" : "text-danger";
    }
    return (
      <span key={index} className={color}>
        {letter}
      </span>
    );
  };

  return (
    <>
      <input
        className=""
        style={{
          opacity: 0,
          cursor: "default",
          zIndex: -1,
          position: "absolute",
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <div
        className="container py-3 text-center"
        onClick={() => inputRef.current?.focus()}
      >
        {letters.map((l, index) => colorLetter(l, index))}
      </div>
    </>
  );
};

export default Test;
