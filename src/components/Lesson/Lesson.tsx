import React from "react";
import ColorBox from "components/common/ColorBox";
import { Key } from "types";
import "./Lesson.module.scss";

type Props = {
  keySet: Key[];
  currentKey: string;
};

const Lesson = ({ keySet, currentKey }: Props) => {
  return (
    <div>
      <div className="flex border-bottom">
        <div className="lesson-col-primary">Lesson's key set:</div>
        <div className="lesson-col-secondary">
          {keySet.map(keyVal => (
            <ColorBox key={keyVal.letter} keyVal={keyVal} />
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="lesson-col-primary">Current Key:</div>
        <div className="lesson-col-secondary">{currentKey}</div>
      </div>
    </div>
  );
};

export default Lesson;
