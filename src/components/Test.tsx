import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  onTestFinish: (results: Results) => void;
}

export interface Results {
  score: string;
  time: number;
  text: string;
}

const Test: React.FC<Props> = ({ text, onTestFinish }) => {
  const [currentPos, setCurrentPos] = useState(0);
  const [score, setScore] = useState("");
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (currentPos === text.length) {
      onTestFinish({
        score: score,
        time: (Date.now() - startTime) / 1000,
        text: text,
      });
    }
  });

  const play = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      currentPos === text.length ||
      e.altKey ||
      e.ctrlKey ||
      e.key === "Shift"
    )
      return;
    if (score.length === 0) setStartTime(Date.now());
    if (text[currentPos] === e.key) {
      if (score.length === currentPos) setScore(score + "+");
      setCurrentPos(currentPos + 1);
    } else {
      if (score.length === currentPos) setScore(score + "-");
    }
    console.log(currentPos, text.length);
  };

  return (
    <>
      <input
        className="container py-3 text-center"
        onKeyDown={play}
        value={text}
        onChange={() => {}}
      />
      {score}
      {text[currentPos]}
    </>
  );
};

export default Test;
