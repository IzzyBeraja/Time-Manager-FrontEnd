import React, { useState } from "react";
import ThemeContext from "context/ThemeContext";
import MainLayout from "layout/MainLayout";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  /*   const handleFullScreen = () => {
    const elem = document.documentElement;
    elem.requestFullscreen();
  }; */

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme: handleTheme }}>
      <MainLayout />
    </ThemeContext.Provider>
  );
};

export default App;
