import Options from "components/Options";
import RecentTestStats from "components/RecentTestStats";
import React from "react";
import { GuageData } from "types";

import "./TypeTestHeader.scss";

type Props = {
  recentTestData: GuageData[];
  handleFullscreen: () => void;
  handleDarkMode: () => void;
  handleSettings: () => void;
};

const TypeTestHeader = ({
  recentTestData,
  handleFullscreen,
  handleDarkMode,
  handleSettings,
}: Props) => {
  return (
    <div className="typetest-header-primary">
      <div className="col-5 tight">
        <RecentTestStats data={recentTestData} />
      </div>
      <div className="typetest-header-secondary">
        <Options
          onFullscreen={handleFullscreen}
          onDarkModeToggle={handleDarkMode}
          onSettingsClicked={handleSettings}
        />
      </div>
    </div>
  );
};

export default TypeTestHeader;
