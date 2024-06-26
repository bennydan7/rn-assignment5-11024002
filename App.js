import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import MyCards from "./screens/MyCards";
import Statistics from "./screens/Statistics";
import Settings from "./screens/Settings";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { ThemeDark, ThemeLight } from "./components/appData";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  const getIconName = (route, focused) => {
    switch (route.name) {
      case "Home":
        return focused ? "home" : "home-outline";
      case "My Cards":
        return focused ? "card" : "card-outline";
      case "Statistics":
        return focused ? "pie-chart-outline" : "pie-chart-outline";
      case "Settings":
        return focused ? "settings" : "settings-outline";
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          const iconName = getIconName(route, focused);
          const iconColor =
            theme === "dark"
              ? "#FFFFFF"
              : focused
              ? ThemeLight.iconActiveColor
              : ThemeLight.iconInactiveColor;

          return <Icon name={iconName} size={size} color={iconColor} />;
        },
        tabBarActiveTintColor: theme === "dark" ? "#FFFFFF" : "#000000",
        tabBarInactiveTintColor: theme === "dark" ? "#FFFFFF" : "gray",
        tabBarStyle: {
          paddingTop: 15,
          height: 70,
          backgroundColor:
            theme === "dark"
              ? ThemeDark.backgroundColor
              : ThemeLight.backgroundColor,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 12,
          marginBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCards} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
