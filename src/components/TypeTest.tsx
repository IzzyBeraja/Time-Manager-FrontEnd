import React, { useEffect, useState, useRef } from "react";
import { getKeySet } from "../keysets/colemak";
import Lesson from "./Lesson";
import Settings from "./Settings";
import Test, { answerTypes } from "./Test";
import TestStats from "./TestStats";
import TestVisual from "./TestVisual";

const TypeTest: React.FC = () => {
  const [speed, setSpeed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [score, setScore] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [answers, setAnswers] = useState<answerTypes[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [keySet, setKeySet] = useState(getKeySet());
  const [text, setText] = useState("This is a test.");

  //* This is a ref to the invisible test input
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (currentPos === text.length) handleTestFinish();
  });

  const reset = () => {
    setCurrentPos(0);
    setAnswers([]);
  };

  const handleFullscreen = () => {
    console.log("Fullscreen?");
    setSpeed(speed + 1);
  };

  const handleDarkMode = () => {
    console.log("Dark mode?");
    setErrors(errors + 2);
  };

  const handleSettings = () => {
    console.log("Settings?");
    setScore(score + 100);
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

  const handleTestFinish = () => {
    const time = (Date.now() - startTime) / (1000 * 60);
    const avgWordLength = 5;
    const wrongAnswers = answers.filter(a => a === "-").length;
    const rightAnswers = text.length - wrongAnswers;
    const wpm = text.length / avgWordLength / time;
    const score = rightAnswers * 20 - wrongAnswers * 20;

    console.log([
      { "Text Length": text.length },
      { "Right Answers": rightAnswers },
      { "Wrong Answers": wrongAnswers },
      { Time: `${(time * 60).toFixed(3)}s` },
      { WPM: wpm.toFixed(3) },
      { Errors: wrongAnswers },
      { Score: score },
    ]);

    setSpeed(wpm);
    setErrors(wrongAnswers);
    setScore(score);
    setKeySet(getKeySet());
    setText("This is the next test.");
    setCurrentPos(0);
    setAnswers([]);
  };

  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-6">
          <TestStats
            speed={speed.toFixed(1)}
            errors={errors.toFixed(0)}
            score={score.toFixed(0)}
            speedGain={"-1.50"}
            errorsGain={"+1.50"}
            scoreGain={"-1.50"}
          />
        </div>
        <div className="col-4">
          <Settings
            onFullscreen={handleFullscreen}
            onDarkModeToggle={handleDarkMode}
            onSettingsClicked={handleSettings}
          />
        </div>
      </div>
      <Lesson keySet={keySet} currentKey={"No Key"} />
      <Test
        inputRef={inputRef}
        text={text}
        answers={answers}
        currentPos={currentPos}
        handleKeyDown={handleTestPlay}
        handleBlur={reset}
      />
      <TestVisual />
    </div>
  );
};

export default TypeTest;
