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

  return (
    <>
      <TestStats />
      <Lesson />
      <Settings />
      <Test />
      <TestVisual />
    </>
  );
};

export default TypeTest;
