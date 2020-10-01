import React from "react";

interface Props {
  letter: string;
  rating: number;
}

const ColorBox: React.FC<Props> = ({ letter, rating }) => {
  const color: (rating: number) => string = rating => {
    const hue = rating >= 100 ? 100 : rating <= 0 ? 0 : rating;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <span
      className="border"
      style={{
        backgroundColor: `${color(rating)}`,
        padding: ".2rem .55rem",
        margin: "0 .25px",
      }}
    >
      {letter}
    </span>
  );
};

export default ColorBox;
