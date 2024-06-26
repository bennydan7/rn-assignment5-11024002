import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../ThemeContext";
import { ThemeLight, ThemeDark } from "../components/appData";

const Statistics = () => {
  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === "light";
  const backgroundColor = isLightTheme
    ? ThemeLight.backgroundColor
    : ThemeDark.backgroundColor;
  const fontColor = isLightTheme ? ThemeLight.fontColor : ThemeDark.fontColor;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: fontColor }]}>Statistics!</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
};

export default Statistics;
