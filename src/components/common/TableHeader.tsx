import React from "react";

interface Props {
  text: string;
}

export const TableHeader: React.FC<Props> = props => {
  return <h1>{props.text}</h1>;
};
