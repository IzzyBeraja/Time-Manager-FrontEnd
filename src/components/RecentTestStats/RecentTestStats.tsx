import React from "react";
import Guage from "components/common/Guage";
import "./RecentTestStats.scss";

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
    <div className="stats">
      {data.map(({ key, label, value, delta, precision, isPercent }) => (
        <Guage
          key={key}
          primaryLabel={label}
          primaryValue={value}
          secondaryValue={delta}
          precision={precision}
          isPercent={isPercent}
        />
      ))}
    </div>
  );
};

export default RecentTestStats;
