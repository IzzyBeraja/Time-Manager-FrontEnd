import React, { useEffect, useState } from "react";
import { getKeySet } from "../keysets/colemak";
import Lesson from "./Lesson";
import Settings from "./Settings";
import Test from "./Test";
import TestStats from "./TestStats";
import TestVisual from "./TestVisual";

const TypeTest: React.FC = () => {
  const [speed, setSpeed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [score, setScore] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [answers, setAnswers] = useState("");
  const [startTime, setStartTime] = useState(Date.now());
  const [keySet, setKeySet] = useState(getKeySet());
  const [text, setText] = useState("This is a test.");

  useEffect(() => {
    if (currentPos === text.length) handleTestFinish();
  });

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
    if (answers.length === 0) setStartTime(Date.now());
    if (text[currentPos] === e.key) {
      if (answers.length === currentPos) setAnswers(answers + "+");
      setCurrentPos(currentPos + 1);
    } else {
      if (answers.length === currentPos) setAnswers(answers + "-");
    }
  };

  const handleTestFinish = () => {
    setKeySet(getKeySet());
    setText("This is the second test.");
    setCurrentPos(0);
    setAnswers("");
    console.log(answers, (Date.now() - startTime) / 1000, text);
  };

  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-6">
          <TestStats
            speed={speed}
            errors={errors}
            score={score}
            speedGain={-1.5}
            errorsGain={0}
            scoreGain={1.5}
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
      <Test text={text} answers={answers} handleKeyDown={handleTestPlay} />
      <TestVisual />
    </div>
  );
};

export default TypeTest;
