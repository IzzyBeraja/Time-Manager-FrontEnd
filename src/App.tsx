import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TimerMenu from "./components/TimerMenu";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TimerMenu />
    </React.Fragment>
  );
}

export default App;
