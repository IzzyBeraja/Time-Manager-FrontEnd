import React from "react";
import { Task } from "./types";

interface Props {
  tasks: Array<Task>;
}

const Table: React.FC<Props> = ({ tasks }) => {
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
        <tbody>
          {tasks.map(t => (
            <tr key={t.Id}>
              <td>{t.Job}</td>
              <td>{t.Task}</td>
              <td>{t.StartTime}</td>
              <td>{t.EndTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
