import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TypeTest, { Stats } from "./components/TypeTest";
import { getKeySet } from "./keysets/colemak";

const App: React.FC = () => {
  const [text, setText] = useState("This is a test.");
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
    setText("This is another test.");
    setKeySet(getKeySet());
    console.log(stats);
  };

  return (
    <div className="flex-container my-2 mx-3">
      <div className="row">
        <div className="col">
          <TypeTest
            text={text}
            keySet={keySet}
            stats={stats}
            onTestFinish={handleTestFinish}
          />
        </div>
        <div className="col-3">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
