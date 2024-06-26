import React, { useContext } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { ThemeContext } from "../ThemeContext";
import {
  ThemeLight,
  ThemeDark,
  TransactionsHistoryData,
  TransactionsHistoryDataDark,
} from "../components/appData";

const images = {
  send: {
    light: require("../assets/send.png"),
    dark: require("../assets/send-white.png"),
  },
  recieve: {
    light: require("../assets/recieve.png"),
    dark: require("../assets/recieve-white.png"),
  },
  loan: {
    light: require("../assets/loan.png"),
    dark: require("../assets/loan-white.png"),
  },
  topUp: {
    light: require("../assets/topUp.png"),
    dark: require("../assets/topUp-white.png"),
  },
};

const Heading = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.profileImage}
          source={require("../assets/profile.png")}
        />
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text
            style={[
              styles.userName,
              {
                color:
                  theme === "light"
                    ? ThemeLight.fontColor
                    : ThemeDark.fontColor,
              },
            ]}
          >
            Bernard Dankwah
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.searchWrapper,
          {
            backgroundColor:
              theme === "light"
                ? ThemeLight.iconContainerColor
                : ThemeDark.iconContainerColor,
          },
        ]}
      >
        <Image
          style={styles.searchIcon}
          source={
            theme === "light"
              ? require("../assets/search.png")
              : require("../assets/search-white.png")
          }
        />
      </View>
    </View>
  );
};

const CreditCard = () => (
  <View style={styles.card}>
    <Image
      resizeMode="contain"
      style={styles.cardImage}
      source={require("../assets/Card.png")}
    />
  </View>
);

const Transactions = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.transactionOptions}>
      {["send", "recieve", "loan", "topUp"].map((action, index) => (
        <View key={index} style={styles.transactionOption}>
          <View
            style={[
              styles.transactionIconWrapper,
              {
                backgroundColor:
                  theme === "light"
                    ? ThemeLight.iconContainerColor
                    : ThemeDark.iconContainerColor,
              },
            ]}
          >
            <Image
              style={styles.transactionIcon}
              source={
                theme === "light" ? images[action].light : images[action].dark
              }
            />
          </View>
          <Text
            style={{
              marginTop: 2,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            {action.charAt(0).toUpperCase() + action.slice(1)}
          </Text>
        </View>
      ))}
    </View>
  );
};

const TransactionHistory = () => {
  const { theme } = useContext(ThemeContext);
  const data =
    theme === "light" ? TransactionsHistoryData : TransactionsHistoryDataDark;

  return (
    <View style={styles.transactionHistory}>
      <View style={styles.transactionHeader}>
        <Text
          style={[
            styles.transactionTitle,
            {
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            },
          ]}
        >
          Transaction
        </Text>
        <Text style={[styles.seeAll, { color: "#4854FF" }]}>See All</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.transactionIconWrapper,
                  {
                    backgroundColor:
                      theme === "light"
                        ? ThemeLight.iconContainerColor
                        : ThemeDark.iconContainerColor,
                  },
                ]}
              >
                <Image style={styles.transactionIcon} source={item.logo} />
              </View>
              <View style={styles.transactionDetails}>
                <Text
                  style={[
                    styles.transactionName,
                    {
                      color:
                        theme === "light"
                          ? ThemeLight.fontColor
                          : ThemeDark.fontColor,
                    },
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.transactionCategory}>{item.category}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                {
                  color:
                    item.type === "black"
                      ? theme === "light"
                        ? "black"
                        : "white"
                      : "#4854FF",
                },
              ]}
            >
              {item.amount}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme === "light"
              ? ThemeLight.backgroundColor
              : ThemeDark.backgroundColor,
        },
      ]}
    >
      <StatusBar
        backgroundColor={
          theme === "light"
            ? ThemeLight.backgroundColor
            : ThemeDark.backgroundColor
        }
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
      <Heading />
      <CreditCard />
      <Transactions />
      <TransactionHistory />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    color: "gray",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  card: {
    marginTop: 20,
  },
  cardImage: {
    width: "100%",
  },
  transactionOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  transactionOption: {
    alignItems: "center",
  },
  transactionIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  transactionIcon: {
    width: 28,
    height: 28,
  },
  transactionHistory: {
    flex: 1,
    marginTop: 30,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  transactionDetails: {
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionCategory: {
    fontSize: 14,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
