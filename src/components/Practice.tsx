import React, { useState } from "react";
import { getKeySet } from "../keysets/colemak";
import TypeTest, { Stats } from "./TypeTest";

const Practice = () => {
  const [text, setText] = useState("This is a test of the software.");
  const [keySet, setKeySet] = useState(getKeySet());
  const [stats, setStats] = useState<Stats>({
    speed: 0,
    speedChange: 0,
    errors: 0,
    errorsChange: 0,
    score: 0,
    scoreChange: 0,
    time: 0,
    textLength: text.length,
  });

  const handleTestFinish = (stats: Stats) => {
    setStats(stats);
    setText(
      "I will weigh 180lbs by November 9th of 2021. I no longer want to be heavy. It hurts my self image and physically weighs me down. It's a stressor in my life. I want to be fit, lean, and full of energy instead of lethargic, rotund, and unhealthy. I will reach my goal by counting my calories every day and eating healthier options. I will only eat during meals and no longer drink alcohol. I believe in myself! I will be 180lbs by November 9th, 2021!"
    );
    setKeySet(getKeySet());
    console.log(stats);
  };

  return (
    <TypeTest
      text={text}
      keySet={keySet}
      stats={stats}
      onTestFinish={handleTestFinish}
    />
  );
};

export default Practice;
