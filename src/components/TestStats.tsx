import React from "react";

interface Props {
  speed: number;
  errors: number;
  score: number;
}

const TestStats: React.FC<Props> = ({ speed, errors, score }) => {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg">Speed: {speed}</div>
        <div className="col-lg">Errors: {errors}</div>
        <div className="col-lg">Score: {score}</div>
      </div>
      <div className="row mx-auto">
        <div className="col-lg">Gain: </div>
        <div className="col-lg">Gain:</div>
        <div className="col-lg">Gain:</div>
      </div>
    </div>
  );
};

export default TestStats;
