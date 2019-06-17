import React, { Component, Fragment } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Alert
} from "react-native";
import axios from "react-native-axios";
import { Redirect,Link } from "react-router-native";
import { Input, Button } from "react-native-elements";


export default class Login extends Component {

  state = {
  users: [],
  username: "",
  password: "",
  loginStatus: 0
};

message = "";
success = false;

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

login = () => {
  const { username, password } = this.state;
  axios
    .post("http://localhost:4000/api/login", {
      username: username,
      password: password
    })

    .then(res => {
      if (res.data.success) {
        this.setState({
          loginStatus: 1
        });
      //  localStorage.setItem("JWT", res.data.token);
      } else if (!res.data.success) {
        Alert.alert("Invalid login");
      }
    })
    .catch(error => {
      console.log(error);
    });
};

storeToken = () => {
  axios
    .post("http://localhost:4000/api/userSession", {
      username: this.state.username
    })
    .then(res => {
      this.setState({
        loginStatus: 1
      });
      //this.mapDispatchToProps();

      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
};


  render() {

    if(this.state.loginStatus==1){

        return <Home />;

    }


    return (
      <View style={{
        height:100,
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        width:'100%',
        }}>


            <Text style={{fontSize: 30, color: '#141823'}}>Login</Text>
            <Text></Text>

            <TextInput
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              style={{width:'80%'}}
            />
            <Text></Text>

            <TextInput
              name="password"
              secureTextEntry={true}
              placeholder="Password"
              onChange={this.handleChange}
              style={{width:'80%'}}
            />
            <Text></Text>
            <Text></Text>

            <Button title="Login" type="solid" onPress={()=>this.props.navigation.navigate('Home')} />

          <View style={{
            height:100,
            marginTop: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:'100%',
            }}>
              <Text></Text>
              <Text>Not registered? Go to register tab</Text>
          </View>






      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
