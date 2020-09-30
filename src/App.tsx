import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TypeTest from "./components/TypeTest";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <TypeTest />
    </>
  );
};

export default App;
