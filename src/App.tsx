import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TimerMenu from "./components/TimerMenu";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <TimerMenu />
    </React.Fragment>
  );
};

export default App;
