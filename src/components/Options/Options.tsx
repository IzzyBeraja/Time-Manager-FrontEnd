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
      <i
        className="fas fa-expand-arrows-alt option-img-btn"
        onClick={onFullscreen}
        title="Fullscreen"
      />
      <i
        className="fas fa-moon option-img-btn"
        onClick={onDarkModeToggle}
        title="Change dark/light mode"
      />
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={onSettingsClicked}
        title="Additional Settings"
      >
        <i className="fas fa-cogs mr-2" />
        Settings
      </button>
    </div>
  );
};

export default Options;
