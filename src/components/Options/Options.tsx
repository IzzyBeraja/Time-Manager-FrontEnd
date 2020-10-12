import ButtonWithImage from "components/common/ButtonWithImage";
import ImageButton from "components/common/ImageButton";
import React from "react";
import "./Options.scss";

type Props = {
  onFullscreen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDarkModeToggle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onSettingsClicked: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Options = ({
  onFullscreen,
  onDarkModeToggle,
  onSettingsClicked,
}: Props) => {
  return (
    <div className="options">
      <ImageButton
        className="options-img-btn"
        title="Change dark/light mode"
        onClick={onDarkModeToggle}
        primaryImage="far fa-lightbulb"
        secondaryImage="fas fa-lightbulb"
      />
      <ImageButton
        className="options-img-btn"
        title="Fullscreen"
        onClick={onFullscreen}
        primaryImage="fas fa-expand"
        secondaryImage="fas fa-compress"
      />
      <ButtonWithImage
        className="btn btn-dark"
        title="Additional Settings"
        onClick={onSettingsClicked}
        image="fas fa-cog"
        text="Settings"
      />
    </div>
  );
};

export default Options;
