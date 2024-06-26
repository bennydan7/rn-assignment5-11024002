import * as React from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MyCards from "./screens/MyCards";
import Statistics from "./screens/Statistics";
import Settings from "./screens/Settings";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeLight, ThemeDark } from "./components/appData";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const App = () => {
  const { theme } = useContext(ThemeContext);

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
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = getIconName(route, focused);
              const iconColor = focused
                ? theme === "dark"
                  ? ThemeDark.iconActiveColor
                  : ThemeLight.iconActiveColor
                : theme === "dark"
                ? ThemeDark.iconInactiveColor
                : ThemeLight.iconInactiveColor;

              return <Icon name={iconName} size={size} color={iconColor} />;
            },
            tabBarActiveTintColor: theme === "dark" ? "#383FFA" : "#000000", // Active tab color
            tabBarInactiveTintColor: "gray", // Inactive tab color
            tabBarStyle: {
              paddingTop: 15,
              height: 70,
              backgroundColor:
                theme === "dark"
                  ? ThemeDark.backgroundColor
                  : ThemeLight.backgroundColor, // Background color based on theme
              borderTopWidth: 0, // Remove top border
              elevation: 0, // Remove Android shadow
              shadowOpacity: 0, // Remove iOS shadow
            },
            tabBarLabelStyle: {
              fontWeight: "bold",
              fontSize: 12,
              marginBottom: 10, // Adjust the space between the icon and the text
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={MyCards} />
          <Tab.Screen name="Statistics" component={Statistics} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
