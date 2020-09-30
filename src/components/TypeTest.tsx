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
  };

  const handleDarkMode = () => {
    console.log("Dark mode?");
  };

  const handleSettings = () => {
    console.log("Settings?");
  };

  return (
    <div className="mx-2">
      <div className="row">
        <div className="col">
          <TestStats speed={speed} errors={errors} score={score} />
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
