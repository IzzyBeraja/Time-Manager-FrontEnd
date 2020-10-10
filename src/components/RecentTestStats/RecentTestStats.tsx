import React from "react";
import Guage from "components/common/Guage";

type Props = {
  speedLabel: string;
  speed: number;
  speedGain: number;
  accuracyLabel: string;
  accuracy: number;
  accuracyGain: number;
  scoreLabel: string;
  score: number;
  scoreGain: number;
};

const RecentTestStats = ({
  speed,
  speedLabel,
  accuracy,
  accuracyLabel,
  score,
  scoreLabel,
  speedGain,
  accuracyGain,
  scoreGain,
}: Props) => {
  return (
    // >> Inline styling might be much better here
    <div className="row">
      <div className="col">
        <Guage
          primaryLabel={speedLabel}
          primaryValue={speed}
          secondaryValue={speedGain}
          precision={1}
        />
      </div>
      <div className="col">
        <Guage
          primaryLabel={accuracyLabel}
          primaryValue={accuracy}
          secondaryValue={accuracyGain}
          precision={2}
          isPercent={true}
        />
      </div>
      <div className="col">
        <Guage
          primaryLabel={scoreLabel}
          primaryValue={score}
          secondaryValue={scoreGain}
        />
      </div>
    </div>
  );
};

export default RecentTestStats;
