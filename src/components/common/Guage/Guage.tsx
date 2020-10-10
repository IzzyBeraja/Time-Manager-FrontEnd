import React from "react";
import "./Guage.scss";

interface Props {
  primaryLabel: string;
  primaryValue: number;
  secondaryValue: number;
  precision?: number;
  reverseSecondaryColor?: boolean;
  toPercent?: boolean;
}

const Guage = ({
  primaryLabel,
  primaryValue: pv,
  secondaryValue: sv,
  precision,
  //reverseSecondaryColor,
  toPercent: p,
}: Props) => {
  const style: (value: number) => string = value => {
    if (value === 0) return "same";
    return value > 0 ? "gain" : "drop";
  };

  const sVal = sv.toFixed(precision) + (p ? "%" : "");
  const pVal = pv.toFixed(precision) + (p ? "%" : "");

  return (
    <>
      <span className="primary-label">{primaryLabel}</span>
      <span className="primary-value">{pVal}</span>
      <p className="secondary-text">
        (<span className={style(sv)}>{sv > 0 ? `+${sVal}` : sVal}</span>)
      </p>
    </>
  );
};

export default Guage;
