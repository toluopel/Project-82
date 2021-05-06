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

userLogin = (username,password)=>{
  firebase.auth().signInWithEmailAndPassword(username,password)
  .then(()=>{
    return Alert.alert('Succesfully Login')
  })
  .catch((error)=>{
    var errorCode = error.code;
    var errorMessgae = error.message;
    return Alert.alert(errorMessage);
  })

}

userSignup = (username,password)=>{
  firebase.auth().createUserWithEmailAndPassword(username,password)
  .then((response)=>{
    return Alert.alert("User Added Succesfully")
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errorMessage);
  });
}

render()
  return(
    <View style = {{alignItems:'center'}}>
      <TextInput
      style = {styles.loginBox}
      keyboardType='email-address'
      onChangeText = {(text)=>{
        this.setState ({
          username:text
        })
      }
      }
      />
      <Text style = {{color:'#ff5722', fontSize:18, fontWeight:'bold', marginLeft:55}}>USERNAME</Text>
    </View>

    

  )
  render()
    return(
<View style = {{alignItems:'center'}}>
  <TouchableOpacity
  style = {[styles.button,{marginBottom:10}]}
  onPress = {() =>{this.userLogin(this.state.username,this.state.password)}}
  >
  <Text style = {{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>

</TouchableOpacity>
<TouchableOpacity style = {styles.button}
onPress = {()=>{this.userSignup(this.state.username,this.sate.password)}}
>
  <Text style = {{color:ff5722, fontSize:18, fontWeight:'bold'}}>SIGNUP</Text>
</TouchableOpacity>

</View>
      )






const styles = Stylesheet.create({
loginBox:{

},
button:{

}
})

