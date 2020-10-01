import React from "react";
import ColorBox from "./common/ColorBox";

interface Props {
  keySet: Key[];
  currentKey: string;
}

interface Key {
  letter: string;
  rating: number;
}

const Lesson: React.FC<Props> = ({ keySet, currentKey }) => {
  return (
    <div>
      <div className="row">
        <div className="col-2">Lesson's key set:</div>
        <div className="col">
          {keySet.map(({ letter, rating }) => (
            <ColorBox letter={letter} rating={rating} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-2">Current Key: </div>
        <div className="col">{currentKey}</div>
      </div>
    </div>
  );
};

export default Lesson;
