import React, { useContext, useState } from "react";
import ButtonWithImage from "components/common/ButtonWithImage";
import ImageButton from "components/common/ImageButton";
import ThemeContext from "context/ThemeContext";
import "./Options.module.scss";

const Options = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const [fullscreen, setFullscreen] = useState("");
  //document.fullscreenElement === null
  //);

  const handleFullScreen = () => {
    if (fullscreen) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  /*   document.onfullscreenchange = () => {
    setFullscreen(document.fullscreenElement === null);
  }; */

  return (
    <div className="options">
      <ImageButton
        className="options-img-btn"
        title="Change dark/light mode"
        value={!darkTheme}
        onClick={setDarkTheme}
        primaryImage="far fa-lightbulb"
        secondaryImage="fas fa-lightbulb"
      />
      <ImageButton
        className="options-img-btn"
        title="Fullscreen"
        value={false} //fullscreen}
        onClick={handleFullScreen}
        primaryImage="fas fa-expand"
        secondaryImage="fas fa-compress"
      />
      <ButtonWithImage
        className="btn btn-dark"
        title="Additional Settings"
        onClick={() => {}}
        image="fas fa-cog"
        text="Settings"
      />
    </div>
  );
};

export default Options;
