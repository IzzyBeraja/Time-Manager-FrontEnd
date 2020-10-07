import React from "react";
import Guage from "../common/Guage/Guage";

type Props = {
  speed: number;
  speedGain: number;
  errors: number;
  errorsGain: number;
  score: number;
  scoreGain: number;
  speedLabel: string;
  speedGainLabel: string;
  errorsLabel: string;
  errorsGainLabel: string;
  scoreLabel: string;
  scoreGainLabel: string;
};

const RecentTestStats = ({
  speed,
  speedLabel,
  errors,
  errorsLabel,
  score,
  scoreLabel,
  speedGain,
  speedGainLabel,
  errorsGain,
  errorsGainLabel,
  scoreGain,
  scoreGainLabel,
}: Props) => {
  return (
    <div className="row">
      <div className="col">
        <Guage
          primaryLabel={speedLabel}
          primaryValue={speed}
          primaryPrecision={1}
          secondaryLabel={speedGainLabel}
          secondaryValue={speedGain}
          secondaryPrecision={2}
        />
      </div>
      <div className="col">
        <Guage
          primaryLabel={errorsLabel}
          primaryValue={errors}
          secondaryLabel={errorsGainLabel}
          secondaryValue={errorsGain}
          secondaryPrecision={2}
          reverseSecondaryColor={true}
        />
      </div>
      <div className="col">
        <Guage
          primaryLabel={scoreLabel}
          primaryValue={score}
          secondaryLabel={scoreGainLabel}
          secondaryValue={scoreGain}
          secondaryPrecision={2}
        />
      </div>
    </div>
  );
};

export default RecentTestStats;
