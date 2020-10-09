import React from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
  text: string;
  image: string;
  className?: string;
};

const ButtonWithImage = ({ onClick, text, title, image, className }: Props) => {
  return (
    <button
      type="button"
      className={`${className ?? ""}`}
      onClick={onClick}
      title={title}
    >
      <i className={`${image}`} style={{ marginRight: ".5rem" }} />
      {text}
    </button>
  );
};

export default ButtonWithImage;
