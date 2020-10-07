import React from "react";
import { Key } from "types";

interface Props {
  keyVal: Key;
}

const ColorBox = ({ keyVal }: Props) => {
  const { active, rating, letter } = keyVal;
  const color: (rating: number) => string = rating => {
    if (!active) return "rgb(220,220,220)";
    const hue = rating >= 100 ? 100 : rating <= 0 ? 0 : rating;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <span
      className="border"
      style={{
        backgroundColor: `${color(rating)}`,
        padding: ".2rem .55rem",
        margin: "0 1px",
      }}
    >
      {letter}
    </span>
  );
};

export default ColorBox;
