import React from "react";

interface timerItem {
  name: string;
  startTime: string;
  endTime: string;
  done: boolean;
}

function Timer() {
  const test: timerItem = {
    name: "Name",
    startTime: "🙋🏻‍♂️",
    endTime: "😀",
    done: true,
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>{test.name}</td>
            <td>{test.startTime}</td>
            <td>{test.endTime}</td>
            <td>{test.done.toString()}</td>
            <td>
              <i className="far fa-smile-wink"></i>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Timer;
