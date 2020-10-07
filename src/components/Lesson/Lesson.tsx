import React from "react";
import ColorBox from "components/common/ColorBox";
import { Key } from "types";

type Props = {
  keySet: Key[];
  currentKey: string;
};

/*
>>  Use Sass variables to set up more columns and have better spacing?
>>  https://getbootstrap.com/docs/4.1/layout/grid/#columns-and-gutters
*/

const Lesson = ({ keySet, currentKey }: Props) => {
  return (
    <div>
      <div className="row">
        <div className="col-2">Lesson's key set:</div>
        <div className="col">
          {keySet.map(keyVal => (
            <ColorBox key={keyVal.letter} keyVal={keyVal} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-2">Current Key:</div>
        <div className="col">{currentKey}</div>
      </div>
    </div>
  );
};

export default Lesson;
