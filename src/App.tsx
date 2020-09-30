import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TypeTest from "./components/TypeTest";

const App: React.FC = () => {
  return (
    <>
      <div className="flex-container">
        <div className="row">
          <div className="col">
            <TypeTest />
          </div>
          <div className="col-3">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
