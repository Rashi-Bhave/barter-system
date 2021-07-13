import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedItemsList: [],
    };
    this.requestRef = null;
  }

  getRequestedItemsList = () => {
    this.requestRef = db
      .collection("requested_items")
      .onSnapshot((snapshot) => {
        var requestedItemsList = snapshot.docs.map((document) =>
          document.data()
        );
        this.setState({
          requestedItemsList: requestedItemsList,
        });
      });
  };

  componentDidMount() {
    this.getRequestedItemsList();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("RecieverDetails", {
                details: item,
              });
              console.log("Working")
            }}
          >
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Home" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.requestedItemsList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Items</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedItemsList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
