import React from "react";
import Guage from "components/common/Guage";

type GuageData = {
  key: string;
  label: string;
  value: number;
  delta: number;
  precision?: number;
  isPercent?: boolean;
};

type Props = {
  data: GuageData[];
};

const RecentTestStats = ({ data }: Props) => {
  return (
    // >> Inline styling might be much better here
    <div className="row">
      {data.map(({ key, label, value, delta, precision, isPercent }) => (
        <div className="col">
          <Guage
            key={key}
            primaryLabel={label}
            primaryValue={value}
            secondaryValue={delta}
            precision={precision}
            isPercent={isPercent}
          />
        </div>
      ))}
    </div>
  );
};

export default RecentTestStats;
