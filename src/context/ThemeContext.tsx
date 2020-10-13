import { createContext } from "react";

type context = {
  darkTheme: boolean;
  setDarkTheme: () => void;
};

const num: context = { darkTheme: false, setDarkTheme: () => {} };
const ThemeContext = createContext(num);
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
