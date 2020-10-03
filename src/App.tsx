import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TypeTest from "./components/TypeTest";
import { getKeySet } from "./keysets/colemak";

const App: React.FC = () => {
  const [text, setText] = useState("This is a test.");
  const [keySet, setKeySet] = useState(getKeySet());

  const handleTestFinish = () => {
    setText("This is another test.");
    setKeySet(getKeySet());
  };

  return (
    <div className="flex-container my-2 mx-3">
      <div className="row">
        <div className="col">
          <TypeTest
            text={text}
            keySet={keySet}
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
