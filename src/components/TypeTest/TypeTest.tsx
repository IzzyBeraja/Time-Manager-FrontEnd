import React, { useEffect, useState, useRef } from "react";
import Lesson from "components/Lesson";
import Test from "components/Test";
import TestVisual from "components/TestVisual";
import { AnswerTypes, Stats, Key, TestResults } from "types";

import "./TypeTest.module.scss";
import TypeTestHeader from "components/TypeTestHeader";

type Props = {
  text: string;
  keySet: Key[];
  stats: Stats;
  onTestFinish: (results: TestResults) => void;
};

const TypeTest = ({ text, keySet, stats, onTestFinish }: Props) => {
  const [currentPos, setCurrentPos] = useState(0);
  const [answers, setAnswers] = useState<Array<AnswerTypes>>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const inputRef = useRef<HTMLInputElement>(null!);
  const data = [
    {
      key: "speed",
      label: "Speed: ",
      value: stats.speed,
      delta: stats.speedChange,
      precision: 1,
    },
    {
      key: "accuracy",
      label: "Accuracy: ",
      value: stats.accuracy,
      delta: stats.accuracyChange,
      precision: 2,
      isPercent: true,
    },
    {
      key: "score",
      label: "Score: ",
      value: stats.score,
      delta: stats.scoreChange,
    },
  ];

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

  // > Raise the state of RecentTestStats data to Practice
  return (
    <div className="tight">
      <TypeTestHeader recentTestData={data} />
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
