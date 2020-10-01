import React from "react";

interface Props {
  text: string;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Test: React.FC<Props> = ({ text, handleKeyDown }) => {
  return (
    <>
      <input
        className="container py-3 text-center"
        onKeyDown={handleKeyDown}
        value={text}
        onChange={() => {}}
      />
    </>
  );
};

export default Test;
