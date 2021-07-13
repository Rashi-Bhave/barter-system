import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import { AppStackNavigator } from "./AppStackNavigator";
import ExchangeScreen from "../screens/ExchangeScreen";

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/Home.gif")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Home",
    },
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/exchange.gif")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Exchange",
    },
  },
});
