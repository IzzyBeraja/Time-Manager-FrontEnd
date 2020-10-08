import React, { useEffect, useState, useRef } from "react";
import Lesson from "components/Lesson";
import Options from "components/Options";
import Test from "components/Test";
import RecentTestStats from "components/RecentTestStats";
import TestVisual from "components/TestVisual";
import { AnswerTypes, Stats, Key } from "types";

type Props = {
  text: string;
  keySet: Key[];
  stats: Stats;
  onTestFinish: (stats: Stats) => void;
};

const TypeTest = ({ text, keySet, stats, onTestFinish }: Props) => {
  const [currentPos, setCurrentPos] = useState(0);
  const [answers, setAnswers] = useState<Array<AnswerTypes>>([]);
  const [startTime, setStartTime] = useState(Date.now());

  //* This is a ref to the invisible test input
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (currentPos === text.length) testFinish();
  });

  const reset = () => {
    setCurrentPos(0);
    setAnswers([]);
  };

  const handleFullscreen = () => {
    console.log("Fullscreen?");
  };

  const handleDarkMode = () => {
    console.log("Dark mode?");
  };

  const handleSettings = () => {
    console.log("Settings?");
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

    const runStats: Stats = {
      speed: wpm,
      speedChange: wpm - stats.speed,
      errors: wrongAnswers,
      errorsChange: wrongAnswers - stats.errors,
      score: runScore,
      scoreChange: runScore - stats.score,
      time: time * 60,
      textLength: text.length,
    };

    reset();
    onTestFinish(runStats);
  };

  return (
    <div className="mx-3">
      <div className="row border-bottom mx-0 pb-2 justify-content-between">
        <div className="col-6 p-0">
          <RecentTestStats
            speedLabel={"Speed: "}
            speed={stats.speed}
            errorsLabel={"Errors: "}
            errors={stats.errors}
            scoreLabel={"Score: "}
            score={stats.score}
            speedGainLabel={"Gain: "}
            speedGain={stats.speedChange}
            errorsGainLabel={"Gain: "}
            errorsGain={stats.errorsChange}
            scoreGainLabel={"Gain: "}
            scoreGain={stats.scoreChange}
          />
        </div>
        <div className="col-4">
          <Options
            onFullscreen={handleFullscreen}
            onDarkModeToggle={handleDarkMode}
            onSettingsClicked={handleSettings}
          />
        </div>
      </div>
      <div className="border-bottom pb-2 pt-2">
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
