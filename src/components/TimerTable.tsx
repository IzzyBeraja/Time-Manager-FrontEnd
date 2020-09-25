import React from "react";
import Table from "./common/Table";
import { getTasks } from "../services/FakeTaskService";

function TimerTable() {
  return <Table tasks={getTasks()} />;
}

export default TimerTable;
