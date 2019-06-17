import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Register from './Register';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Drawer = createBottomTabNavigator({
  Login:{
    screen: Login,
    navigationOptions:{
      tabBarIcon:({tintColor}) =>
      <Icon name="lock" size={25} color={tintColor} />
    }
  } ,
  Register:{
    screen: Register,
    navigationOptions:{
      tabBarIcon:({tintColor}) =>
      <Icon name="plus" size={25} color={tintColor} />
    }
  } ,


});

AppRegistry.registerComponent('Drawer', () => Drawer);
export default createAppContainer(Drawer);
