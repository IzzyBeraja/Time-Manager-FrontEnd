import React from "react";

interface Props {
  primaryLabel: string;
  primaryValue: number;
  secondaryLabel: string;
  secondaryValue: number;
}

const Guage: React.FC<Props> = ({
  primaryLabel,
  primaryValue,
  secondaryLabel,
  secondaryValue,
}) => {
  const color: (value: number) => string = value => {
    if (value > 0) return "text-success";
    if (value < 0) return "text-danger";
    return "";
  };

  return (
    // TODO: Learn some CSS and get the styling out of here
    <>
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <p>{primaryLabel}</p>
        <h3 className="my-0">{primaryValue}</h3>
      </div>

      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <p>{secondaryLabel}</p>
        <p className={color(secondaryValue)}>{secondaryValue}</p>
      </div>
    </>
  );
};

export default Guage;
