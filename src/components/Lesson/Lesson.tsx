import React from "react";
import ColorBox from "components/common/ColorBox";
import { Key } from "types";
import styles from "./Lesson.module.scss";

type Props = {
  keySet: Key[];
  currentKey: string;
};

const Lesson = ({ keySet, currentKey }: Props) => {
  return (
    <div>
      <div className={`${styles.flex} border-bottom`}>
        <div className={styles.lessonColPrimary}>Lesson's key set:</div>
        <div className={styles.lessonColSecondary}>
          {keySet.map(keyVal => (
            <ColorBox key={keyVal.letter} keyVal={keyVal} />
          ))}
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.lessonColPrimary}>Current Key:</div>
        <div className={styles.lessonColSecondary}>{currentKey}</div>
      </div>
    </div>
  );
};

export default Lesson;
