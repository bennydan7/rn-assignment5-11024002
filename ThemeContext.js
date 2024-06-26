import React, { createContext, useState } from "react";
import { ThemeDark } from "./components/appData";

export const ThemeContext = createContext({
  theme: "light", // Initial theme
  toggleTheme: () => {},
  getBackgroundColor: () => "white", // Default background color
  getBackgroundColorMain: () => "white", // Default main background color
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getBackgroundColor = () => {
    return theme === "light" ? "white" : ThemeDark.iconContainerColor;
  };

  const getBackgroundColorMain = () => {
    return theme === "light" ? "white" : ThemeDark.backgroundColor;
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, getBackgroundColor, getBackgroundColorMain }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
