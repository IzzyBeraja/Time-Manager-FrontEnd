import React from "react";
import styles from "./Guage.module.scss";

type Props = {
  primaryLabel: string;
  primaryValue: number;
  secondaryValue: number;
  precision?: number;
  reverseSecondaryColor?: boolean;
  isPercent?: boolean;
};

const Guage = ({
  primaryLabel,
  primaryValue: pv,
  secondaryValue: sv,
  precision,
  //reverseSecondaryColor,
  isPercent: p,
}: Props) => {
  const style = (value: number) => {
    if (value === 0) return "";
    return value > 0 ? "gain" : "drop";
  };

  const format = (value: number) => {
    return Math.abs(value).toFixed(precision) + (p ? "%" : "");
  };

  return (
    <div>
      <span className={styles.primaryLabel}>{primaryLabel}</span>
      <span className={styles.primaryValue}>{format(pv)}</span>
      <p className={styles.secondaryText}>
        <span className={styles[style(sv)]}>{format(sv)}</span>
      </p>
    </div>
  );
};

export default Guage;
