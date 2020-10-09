import ButtonWithImage from "components/common/ButtonWithImage";
import ImageButton from "components/common/ImageButton";
import React from "react";
import "scss/components/Options.scss";

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
    <div className="d-flex justify-content-end align-items-center">
      <ImageButton
        className="option-img-btn"
        primaryImage="fas fa-expand-arrows-alt"
        secondaryImage="fas fa-compress-arrows-alt"
        onClick={onFullscreen}
        title="Fullscreen"
      />
      <ImageButton
        className="option-img-btn"
        primaryImage="fas fa-moon"
        secondaryImage="fas fa-sun"
        onClick={onDarkModeToggle}
        title="Change dark/light mode"
      />
      <ButtonWithImage
        title="Additional Settings"
        onClick={onSettingsClicked}
        image="fas fa-cogs"
        text="Settings"
      />
    </div>
  );
};

export default Options;
