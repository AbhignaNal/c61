import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View>
      <Text style = {styles.text}>SCHOOL ATTENDANCE</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "tahoma",
    alignSelf: "center"
  }
})
