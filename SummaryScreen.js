import * as React from 'react';
import {View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';
import db from '../config';

export default class SummaryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      present: [],
      absent: []
    }
  }
  componentDidMount = async () => {
    var today = await this.getTodayDate() 
  }
  getTodayDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd; 
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }
  render(){
    return(
      <View>
      <Text>{this.getTodayDate}</Text>
      </View>
    )
  }
}