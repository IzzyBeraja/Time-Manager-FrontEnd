import React from "react";
import Table from "./common/Table";
import { getTasks } from "../services/FakeTaskService";

const TimerTable: React.FC = () => {
  return <Table tasks={getTasks()} />;
};

export default TimerTable;
