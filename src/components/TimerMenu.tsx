import React from "react";
import TimerTable from "./TimerTable";

const TimerMenu: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Timer Menu</h1>
      <TimerTable />
    </div>
  );
};

export default TimerMenu;
