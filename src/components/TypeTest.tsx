import React, { useState } from "react";
import Lesson from "./Lesson";
import Settings from "./Settings";
import Test from "./Test";
import TestStats from "./TestStats";
import TestVisual from "./TestVisual";

const TypeTest: React.FC = () => {
  const [speed, setSpeed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [score, setScore] = useState(0);

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
      <Lesson />
      <Test />
      <TestVisual />
    </div>
  );
};

export default TypeTest;
