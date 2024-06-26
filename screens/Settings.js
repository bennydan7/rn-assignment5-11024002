import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../ThemeContext";
import { ThemeLight, ThemeDark } from "../components/appData";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled((prevState) => !prevState);
    toggleTheme();
  };

  const getBackgroundColor = () =>
    theme === "light" ? ThemeLight.backgroundColor : ThemeDark.backgroundColor;

  const getFontColor = () =>
    theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: getBackgroundColor() }]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: getFontColor() }]}>
          Settings
        </Text>
      </View>
      <View style={styles.settingsList}>
        {settingsItems.map((item, index) => (
          <View
            key={index}
            style={[
              styles.itemContainer,
              {
                borderBottomColor:
                  theme === "light" ? "#0000000B" : "#FFFFFF7F",
              },
            ]}
          >
            <Text style={[styles.itemText, { color: getFontColor() }]}>
              {item.label}
            </Text>
            <Icon
              name="chevron-forward-outline"
              size={25}
              color={theme === "light" ? "#0000003D" : "#FFFFFF7F"}
            />
          </View>
        ))}
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText, { color: getFontColor() }]}>
            Theme
          </Text>
          <Switch
            trackColor={{ false: "#A1A0A1", true: "#A1A0A1" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggle}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const settingsItems = [
  { label: "Language" },
  { label: "My Profile" },
  { label: "Contact Us" },
  { label: "Change Password" },
  { label: "Privacy Policy" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  settingsList: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: 1.3,
    paddingBottom: 13,
  },
  itemText: {
    fontWeight: "500",
    fontSize: 17,
  },
});

export default Settings;
