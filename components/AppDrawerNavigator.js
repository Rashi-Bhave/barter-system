import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import SettingScreen from "../screens/SettingScreen";
import MyBartersScreen from "../screens/MyBartersScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MyReceivedItemsScreen from "../screens/MyReceivedItemsScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    MyBarters: {
      screen: MyBartersScreen,
    },
    Notifications: {
      screen: NotificationScreen,
    },
  MyReceivedItems: {
    screen: MyReceivedItemsScreen,
  },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
