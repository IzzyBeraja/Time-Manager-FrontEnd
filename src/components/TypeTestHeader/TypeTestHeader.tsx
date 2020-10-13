import Options from "components/Options";
import RecentTestStats from "components/RecentTestStats";
import React from "react";
import { GuageData } from "types";

import "./TypeTestHeader.scss";

type Props = {
  recentTestData: GuageData[];
};

const TypeTestHeader = ({ recentTestData }: Props) => {
  return (
    <div className="typetest-header-primary">
      <div className="col-5 tight">
        <RecentTestStats data={recentTestData} />
      </div>
      <div className="typetest-header-secondary">
        <Options />
      </div>
    </div>
  );
};

export default TypeTestHeader;
