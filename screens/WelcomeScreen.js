import React, { Component } from "react";
import  Modal from 'react-native';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
 
  Alert
} from "react-native";
import BarterAnimation from "../components/BarterAnimationScreen.js";
import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  


  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        return Alert.alert("Successfully Login");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (username, password, confirmPassword) => {
    
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
          });
          return Alert.alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

showModal = () =>{
  <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.isVisible}
  />
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <BarterAnimation />
          <Text style={styles.title}>Barter</Text>
          <Text style={{ color: "#ff8a65" }}> A Trading Method </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text
            style={{
              color: "#ff5722",
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 55
            }}
          >
            USERNAME
          </Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.loginBox}
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  username: text
                });
              }}
            />
          </View>
          <Text
            style={{
              color: "#ff5722",
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 55
            }}
          >
            PASSWORD
          </Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: 10 }]}
              onPress={() => {
                this.userLogin(this.state.username, this.state.password);
              }}
            >
              <Text
                style={{ color: "#ff5722", fontSize: 18, fontWeight: "bold" }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userSignUp(this.state.username, this.state.password);
              }}
            >
              <Text
                style={{ color: "#ff5722", fontSize: 18, fontWeight: "bold" }}
              >
                SIGN UP
              </Text>
              <TextInput
style={styles.formTextInput}
placeholder={'First Name'}
maxLength={8}
onChangeText={(text) => {
  this.setState({
    firstName: text
    
  })
}}
/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe0b2"
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 60,
    fontWeight: "300",
    fontFamily: "AvenirNext-Heavy",
    color: "#ff9800"
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: "#ffab91",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ffff",
    elevation: 10
  },
  buttonContainer: {
    flex: 1
  },
  formTextInput: {

  }
});
