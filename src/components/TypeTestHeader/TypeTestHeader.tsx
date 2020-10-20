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
    <div className={styles.header}>
      <RecentTestStats data={recentTestData} />
      <Options />
    </div>
  );
};

export default TypeTestHeader;
