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
  return (
    // TODO: Learn some CSS and get the styling out of here
    <>
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <p className="my-0">{primaryLabel}</p>
        <h3 className="my-0">{primaryValue}</h3>
      </div>

      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <p className="my-0">{secondaryLabel}</p>
        <p className="my-0">{secondaryValue}</p>
      </div>
    </>
  );
};

export default Guage;
