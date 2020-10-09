import React from "react";
import "./ButtonWithImage.scss";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
  text: string;
  image: string;
  className?: string;
  imageClassName?: string;
};

const ButtonWithImage = ({ onClick, text, title, image, className }: Props) => {
  return (
    <button
      type="button"
      className={`${className ?? ""}`}
      onClick={onClick}
      title={title}
    >
      <i className={`${image} btnImage`} />
      {text}
    </button>
  );
};

export default ButtonWithImage;
