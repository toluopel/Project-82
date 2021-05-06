import React from "react";
import { render } from "react-dom";
import {email, password} from 'react-native';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

addItem = (itemName, description)=>{
    var userName = this.state.userName
    db.collection('exchange_requests').add({
        "userName": userName,
        "description":description
    })
    this.setState({
        itemName :'',
        description : ''
    })
    return Alert.alert(
        'Item ready to exchange',
        '',
        [
            {text: 'OK', onPress: ( )=>{
                this.props.navigation.navigate('HomeScreen')
        }}
        ]
    );
}

render()
    return(
        <TouchableOpacity
        style = {[styles.button,{marginTop:10}]}
        onPress = {() =>{this.addItem(this.state.itemName, this.state.description)} }
        >
            <Text style = {{color:'ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>

        </TouchableOpacity>
    )
