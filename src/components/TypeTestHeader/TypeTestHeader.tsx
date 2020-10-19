import Options from "components/Options";
import RecentTestStats from "components/RecentTestStats";
import React from "react";
import { Stat } from "types";

import styles from "./TypeTestHeader.module.scss";

type Props = {
  recentTestData: Stat[];
};

const TypeTestHeader = ({ recentTestData }: Props) => {
  return (
    <div className={styles.typetestHeaderPrimary}>
      <div className="col-5 tight">
        <RecentTestStats data={recentTestData} />
      </div>
      <div className={styles.typetestHeaderSecondary}>
        <Options />
      </div>
    </div>
  );
};

export default TypeTestHeader;
