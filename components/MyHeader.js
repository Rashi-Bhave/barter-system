import React, { Component } from "react";
import { Header, Badge, Icon } from "react-native-elements";
import { View, Text, StyeSheet, Alert } from "react-native";
import db from "../config";
import firebase from "firebase";

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  getNumberOfUnreadNotifications = () => {
    db.collection("all_notifications")
      .where("notifications_status", "==", "unread")
      .where("targeted_user_id", "==", firebase.auth().currentUser.email)
      .onSnapshot((response) => {
        var unreadNotifications = response.docs.map((doc) => {
          doc.data();
        });
        this.setState({
          value: unreadNotifications.length,
        });
      });
  };

  BellIconWithBadge = () => {
    return (
      <View>
        <Icon
          name="bell"
          type="font-awesome"
          color="#696969"
          size={25}
          onPress={() => this.props.navigation.navigate("Notifications")}
        />
        <Badge
          value={this.state.value}
          status="error"
          containerStyle={{ position: "absolute", top: -4, right: -4 }}
        />
      </View>
    );
  };

  componentDidMount() {
    this.getNumberOfUnreadNotifications();
  }

  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#696969"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
        }}
        rightComponent={<this.BellIconWithBadge {...this.props} />}
        backgroundColor="#eaf8fe"
      />
    );
  }
}
