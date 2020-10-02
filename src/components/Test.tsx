import React, { useEffect, useRef } from "react";

interface Props {
  text: string;
  answers: string;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Test: React.FC<Props> = ({ text, answers, handleKeyDown }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef?.current?.focus();
  });

  return (
    <>
      <input
        className=""
        style={{ opacity: 0 }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <div
        className="container py-3 text-center "
        onClick={() => {
          inputRef.current?.focus();
          console.log("Focusing input");
        }}
      >
        <span>{text}</span>
      </div>
    </>
  );
};

export default Test;
