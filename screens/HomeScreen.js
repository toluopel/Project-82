import React from "react";
import { render } from "react-dom";
import {email, FlatList, password} from 'react-native';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render()
  return(
      <FlatList
      keyExtractor = {this.keyExtractor}
      data = {this.state.allRequests}
      renderItem = {this.renderItem}
      />
  )
  