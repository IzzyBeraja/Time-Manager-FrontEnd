import React from "react";
import Guage from "./common/Guage";

interface Props {
  speed: string;
  speedGain: string;
  errors: string;
  errorsGain: string;
  score: string;
  scoreGain: string;
}

const TestStats: React.FC<Props> = ({
  speed,
  errors,
  score,
  speedGain,
  errorsGain,
  scoreGain,
}) => {
  return (
    <div className="row">
      <div className="col">
        <Guage
          primaryLabel="Speed: "
          primaryValue={speed}
          secondaryLabel="Gain: "
          secondaryValue={speedGain}
        />
      </div>
      <div className="col">
        <Guage
          primaryLabel="Errors: "
          primaryValue={errors}
          secondaryLabel="Gain: "
          secondaryValue={errorsGain}
        />
      </div>
      <div className="col">
        <Guage
          primaryLabel="Score: "
          primaryValue={score}
          secondaryLabel="Gain: "
          secondaryValue={scoreGain}
        />
      </div>
    </div>
  );
};

export default TestStats;
