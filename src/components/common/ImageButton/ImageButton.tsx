import React, { useState } from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  title: string;
  primaryImage: string;
  secondaryImage: string;
  className?: string;
};

const ImageButton = ({
  onClick,
  primaryImage,
  secondaryImage,
  title,
  className,
}: Props) => {
  const [buttonState, setButtonState] = useState(true);

  return (
    <i
      className={`${className ?? ""} ${
        buttonState ? primaryImage : secondaryImage
      }`}
      onClick={data => {
        onClick(data);
        setButtonState(!buttonState);
      }}
      title={title}
    />
  );
};

export default ImageButton;
