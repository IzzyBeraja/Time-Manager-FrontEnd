import React from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  title: string;
  value: boolean;
  primaryImage: string;
  secondaryImage: string;
  className?: string;
};

const ImageButton = ({
  onClick,
  title,
  value,
  primaryImage,
  secondaryImage,
  className,
}: Props) => {
  return (
    <i
      className={`${className ?? ""} ${value ? primaryImage : secondaryImage}`}
      onClick={onClick}
      title={title}
    />
  );
};

export default ImageButton;
