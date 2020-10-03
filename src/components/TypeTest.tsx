import React, { useEffect, useState } from "react";
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
    const response = [...answers];
    if (answers.length === 0) setStartTime(Date.now());
    if (text[currentPos] === e.key) {
      response.push("+");
      if (answers.length === currentPos) setAnswers(response);
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
    setSpeed(text.length / avgWordLength / time);
    setErrors(wrongAnswers);
    setScore(rightAnswers * 20 - wrongAnswers * 20);
    setKeySet(getKeySet());
    setText('"What are you doing?"');
    setCurrentPos(0);
    setAnswers([]);
    console.log(answers, time, text);
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
      <Test text={text} answers={answers} handleKeyDown={handleTestPlay} />
      <TestVisual />
    </div>
  );
};

export default TypeTest;
