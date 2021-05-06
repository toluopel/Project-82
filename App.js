import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
import {createAppContainer,createSwitchNavigator} from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},

})
const AppContainer= createAppContainer(switchNavigator)

