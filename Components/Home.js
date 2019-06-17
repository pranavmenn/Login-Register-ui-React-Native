import React, { Component, Fragment } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from "react-native";

export default class Home extends Component{
  render(){
    return(
      <View>
      <Text> Home </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Home', () => Login);
