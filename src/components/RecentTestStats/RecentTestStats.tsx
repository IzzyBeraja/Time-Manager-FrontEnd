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
        const { visual, data } = value;
        return (
          <div className={styles.entry}>
            <Guage
              key={key}
              primaryLabel={visual.label}
              primaryValue={data.value}
              secondaryValue={data.delta}
              precision={visual.precision}
              isPercent={data.isPercent}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecentTestStats;
