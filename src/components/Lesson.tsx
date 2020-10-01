import React from "react";
import ColorBox from "./common/ColorBox";

interface Props {
  keySet: Key[];
}

interface Key {
  letter: string;
  rating: number;
}

const Lesson: React.FC<Props> = ({ keySet }) => {
  return (
    <div>
      Lesson's key set:
      {keySet.map(({ letter, rating }) => (
        <ColorBox letter={letter} rating={rating} />
      ))}
      <p>Current Key: </p>
    </div>
  );
};

export default Lesson;
