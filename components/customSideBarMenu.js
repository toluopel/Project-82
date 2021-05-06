import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from "firebase";

export default class CustomSideBarMenu extends React.Component {
    render() {
      return (
        <View style={{flex:1}}>

            <DrawerItems {...this.props} />

           <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
            <TouchableOpacity
              style={{justifyContent:'center', padding:10, height:30, width:'100%'}}
              onPress={() => {
                this.props.navigation.navigate("WelcomeScreen");
                firebase.auth().signOut();
              }}>
              <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
             </View>
      )
            }}