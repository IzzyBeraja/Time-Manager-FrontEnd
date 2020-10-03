import React, { useEffect, useState, useRef } from "react";
import Lesson from "./Lesson";
import Settings from "./Settings";
import Test, { answerTypes } from "./Test";
import RecentTestStats from "./RecentTestStats";
import TestVisual from "./TestVisual";

interface Props {
  text: string;
  keySet: { letter: string; rating: number }[];
  onTestFinish: () => void;
}

const TypeTest: React.FC<Props> = ({ text, keySet, onTestFinish }) => {
  const [speed, setSpeed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [score, setScore] = useState(0);
  const [speedGain, setSpeedGain] = useState(0);
  const [errorsGain, setErrorsGain] = useState(0);
  const [scoreGain, setScoreGain] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [answers, setAnswers] = useState<answerTypes[]>([]);
  const [startTime, setStartTime] = useState(Date.now());

  //* This is a ref to the invisible test input
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (currentPos === text.length) {
      testFinish();
      onTestFinish();
    }
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

  const testFinish = () => {
    const time = (Date.now() - startTime) / (1000 * 60);
    const avgWordLength = 5;
    const wrongAnswers = answers.filter(a => a === "-").length;
    const rightAnswers = text.length - wrongAnswers;
    const wpm = text.length / avgWordLength / time;
    const runScore = rightAnswers * 20 - wrongAnswers * 20;

    console.log([
      { "Text Length": text.length },
      { "Right Answers": rightAnswers },
      { "Wrong Answers": wrongAnswers },
      { Time: `${(time * 60).toFixed(3)}s` },
      { WPM: wpm.toFixed(3) },
      { Errors: wrongAnswers },
      { Score: runScore },
    ]);

    setSpeed(wpm);
    setErrors(wrongAnswers);
    setScore(runScore);
    setSpeedGain(wpm - speed);
    setErrorsGain(wrongAnswers - errors);
    setScoreGain(runScore - score);
    setCurrentPos(0);
    setAnswers([]);
  };

  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-6">
          <RecentTestStats
            speedLabel={"Speed: "}
            speed={speed}
            errorsLabel={"Errors: "}
            errors={errors}
            scoreLabel={"Score: "}
            score={score}
            speedGainLabel={"Gain: "}
            speedGain={speedGain}
            errorsGainLabel={"Gain: "}
            errorsGain={errorsGain}
            scoreGainLabel={"Gain: "}
            scoreGain={scoreGain}
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
