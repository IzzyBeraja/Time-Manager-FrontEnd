import React from "react";
import { getTasks } from "../services/FakeTaskService";
import TimerElement from "./TimerElement";

function TimerTable() {
  const tasks = getTasks();

  return (
    <div>
      <table className="table bg-light text-center">
        <thead className="thead-dark">
          <tr>
            <th>Job</th>
            <th>Task</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>{tasks.map(t => TimerElement(t))}</tbody>
      </table>
    </div>
  );
}

export default TimerTable;
