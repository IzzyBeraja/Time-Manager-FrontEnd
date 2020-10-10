import React, { useState } from "react";
import { getKeySet } from "keysets/colemak";
import TypeTest from "components/TypeTest";

import { Stats } from "types";
import { getTest } from "services/TypeTestService";

const Practice = () => {
  const [text, setText] = useState("");
  const [keySet, setKeySet] = useState(getKeySet());
  const [stats, setStats] = useState<Stats>({
    speed: 0,
    speedChange: 0,
    accuracy: 0,
    accuracyChange: 0,
    score: 0,
    scoreChange: 0,
    time: 0,
    textLength: text.length,
  });

  const handleTestFinish = (stats: Stats) => {
    setStats(stats);
    const test = getTest();
    setText(test.text);
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
