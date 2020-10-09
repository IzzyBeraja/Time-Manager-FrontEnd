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
      className={`${className ?? ""} btn btn-dark mx-1`}
      onClick={onClick}
      title={title}
    >
      <i className={`${image} mr-2`} />
      {text}
    </button>
  );
};

export default ButtonWithImage;
