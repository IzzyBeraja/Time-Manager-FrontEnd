import React from "react";
import { Key } from "types";
import styles from "./ColorBox.module.scss";

type Props = {
  keyVal: Key;
};

const ColorBox = ({ keyVal }: Props) => {
  const { active, rating, letter } = keyVal;
  const color: (rating: number) => string = rating => {
    if (!active) return "rgb(220,220,220)";
    const hue = rating >= 100 ? 100 : rating <= 0 ? 0 : rating;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div
      className={styles.colorBox}
      // > Fix issue with this style. "Works" but causes errors
      /*       style={{
        backgroundColor: `${color(rating)}`,
      }} */
    >
      {letter}
    </div>
  );
};

export default ColorBox;
