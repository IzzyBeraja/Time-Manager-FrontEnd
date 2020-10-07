import React, { useState } from "react";
import { getKeySet } from "../../keysets/colemak";
import TypeTest from "../TypeTest/TypeTest";

import { Stats } from "../../types";

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
      "Now this is the story all about how, My life got flipped-turned upside down, And I'd like to take a minute, just sit right there, I'll tell you how I became the prince of a town called Bel Air."
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
