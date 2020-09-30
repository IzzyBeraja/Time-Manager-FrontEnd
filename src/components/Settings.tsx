import React from "react";

interface Props {
  onFullscreen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDarkModeToggle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onSettingsClicked: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Settings: React.FC<Props> = ({
  onFullscreen,
  onDarkModeToggle,
  onSettingsClicked,
}) => {
  return (
    <div className="float-right">
      <i
        className="fas fa-expand-arrows-alt mx-1"
        style={{ cursor: "pointer" }}
        onClick={onFullscreen}
        title="Fullscreen"
      />
      <i
        className="fas fa-moon mx-1"
        style={{ cursor: "pointer" }}
        onClick={onDarkModeToggle}
        title="Change dark/light mode"
      />
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={onSettingsClicked}
      >
        <i className="fas fa-cogs mr-2" />
        Settings
      </button>
    </div>
  );
};

export default Settings;
