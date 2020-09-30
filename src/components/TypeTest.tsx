import React, { useState } from "react";
import Lesson from "./Lesson";
import Settings from "./Settings";
import Test from "./Test";
import TestStats from "./TestStats";
import TestVisual from "./TestVisual";

interface Props {}

const TypeTest: React.FC<Props> = () => {
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
    <>
      <div className="flex-container">
        <div className="row">
          <div className="col">
            <TestStats speed={speed} errors={errors} score={score} />
          </div>
          <div className="col-4 mx-auto">
            <Settings
              onFullscreen={handleFullscreen}
              onDarkModeToggle={handleDarkMode}
              onSettingsClicked={handleSettings}
            />
          </div>
        </div>
      </div>

      <Lesson />

      <Test />
      <TestVisual />
    </>
  );
};

export default TypeTest;
