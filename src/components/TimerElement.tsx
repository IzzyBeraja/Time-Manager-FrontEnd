import React from "react";
import { task } from "./common/types";

function TimerElement(props: task) {
  return (
    <React.Fragment>
      <tr key={props.Id}>
        <td>{props.Job}</td>
        <td>{props.Task}</td>
        <td>{props.StartTime}</td>
        <td>{props.EndTime}</td>
      </tr>
    </React.Fragment>
  );
}

export default TimerElement;
