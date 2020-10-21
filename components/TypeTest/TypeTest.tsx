import React, { useEffect, useState, useRef } from "react";
import Lesson from "components/Lesson";
import Test from "components/Test";
import TestVisual from "components/TestVisual";
import TypeTestHeader from "components/TypeTestHeader";
import { AnswerTypes, Stat, Key, TestResults } from "types";

type Props = {
  text: string;
  keySet: Key[];
  stats: Stat[];
  onTestFinish: (results: TestResults) => void;
};

const TypeTest = ({ text, keySet, stats, onTestFinish }: Props) => {
  const [currentPos, setCurrentPos] = useState(0);
  const [answers, setAnswers] = useState<Array<AnswerTypes>>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (currentPos === text.length) testFinish();
  });

  const reset = () => {
    setCurrentPos(0);
    setAnswers([]);
  };

  const handleTestPlay = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      currentPos === text.length ||
      e.altKey ||
      e.ctrlKey ||
      e.key === "Shift"
    )
      return;
    if (e.key === "Escape") return reset();
    const response = [...answers];
    if (answers.length === 0) setStartTime(Date.now());
    if (text[currentPos] === e.key) {
      // Correct answer on first try
      if (answers.length === currentPos) {
        response.push("+");
        setAnswers(response);
      }
      setCurrentPos(currentPos + 1);
    } else {
      response.push("-");
      if (answers.length === currentPos) setAnswers(response);
    }
  };

  const testFinish = () => {
    if (text.length !== 0) {
      reset();
      onTestFinish({ answers, startTime, endTime: Date.now() });
    }
  };

  return (
    <div className="tight">
      <TypeTestHeader recentTestData={stats} />
      <div className="border-bottom">
        <Lesson keySet={keySet} currentKey={"No Key"} />
      </div>
      <div>
        <Test
          inputRef={inputRef}
          text={[...text]}
          answers={answers}
          currentPos={currentPos}
          handleKeyDown={handleTestPlay}
          handleBlur={reset}
        />
        <TestVisual />
      </div>
    </div>
  );
};

export default TypeTest;
