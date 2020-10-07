import React from "react";

type Props = {
  title: string;
  details: string;
};

const Card = ({ title, details }: Props) => {
  return (
    <div className="border">
      <h4 className="text-center">{title}</h4>
      <h2 className="text-center">{details}</h2>
    </div>
  );
};

export default Card;
