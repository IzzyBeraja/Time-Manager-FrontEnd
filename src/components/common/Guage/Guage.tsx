import React from "react";

interface Props {
  primaryLabel: string;
  primaryValue: number;
  primaryPrecision?: number;
  secondaryLabel: string;
  secondaryValue: number;
  secondaryPrecision?: number;
  reverseSecondaryColor?: boolean;
}

const Guage: React.FC<Props> = ({
  primaryLabel,
  primaryValue,
  primaryPrecision,
  secondaryLabel,
  secondaryValue,
  secondaryPrecision,
  reverseSecondaryColor,
}) => {
  const color: (value: number) => string = value => {
    if (value === 0) return "";
    const color = value > 0 ? !reverseSecondaryColor : reverseSecondaryColor;
    return color ? "text-success" : "text-danger";
  };

  return (
    // TODO: Learn some CSS and get the styling out of here
    <>
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <p>{primaryLabel}</p>
        <h1 className="my-0">{primaryValue.toFixed(primaryPrecision)}</h1>
      </div>

      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <p>{secondaryLabel}</p>
        <p className={color(secondaryValue)}>
          {secondaryValue > 0
            ? `+${secondaryValue.toFixed(secondaryPrecision)}`
            : secondaryValue.toFixed(secondaryPrecision)}
        </p>
      </div>
    </>
  );
};

export default Guage;
