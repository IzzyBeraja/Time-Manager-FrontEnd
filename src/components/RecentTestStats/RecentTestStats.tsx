import React from "react";
import Guage from "components/common/Guage";
import { Stat } from "types";
import styles from "./RecentTestStats.module.scss";

type Props = {
  data: Stat[];
};

const RecentTestStats = ({ data }: Props) => {
  return (
    <div className={styles.stats}>
      {data.map(({ key, value }) => {
        const { label, value: result, delta, isPercent, precision } = value;
        return (
          <Guage
            key={key}
            primaryLabel={`${label}: `}
            primaryValue={result}
            secondaryValue={delta}
            precision={precision}
            isPercent={isPercent}
          />
        );
      })}
    </div>
  );
};

export default RecentTestStats;
