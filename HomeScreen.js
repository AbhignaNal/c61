import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      all_students: [],
      status: ''
    }
  }
  showStudentRoll = async () => {
    var class_ref = await db.ref('students/').on('value', data => {
      var students = [];
      var class_A = data.val().class_a;
      for(var aStudent in class_A){
        class_A[aStudent]['roll_no'] = aStudent
        students.push(class_A[aStudent])
      }
    students.sort(function(a, b){
      return a.roll_no - b.roll_no
    })
    this.setState({
      all_students: students,
    })
  })
}

componentDidMount(){
  this.showStudentRoll();
  }
changeStatusToPresent = () => {
  this.setState({
    status: 'present'
  })
}
changeStatusToAbsent = () => {
  this.setState({
    status: 'absent'
  })
}
  updateAttendance(roll_no, status){
    var id = '';
    if(roll_no <= 9){
      id = '0' + roll_no
    }else {
      id = roll_no
    }
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
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    })
  }
  render(){
    if(this.state.status === ''){
    return(
      <View>
      <AppHeader/>
      {this.state.all_students.map((aStudent) => (
        <View style = {styles.student}>
        <Text style = {styles}>{aStudent.name.toUpperCase()}</Text>
        <TouchableOpacity style = {[styles.presentbutton]} onPress = {() => {this.changeStatusToPresent}}>
        <Text>Present</Text> 
        </TouchableOpacity>
       <TouchableOpacity style = {[styles.absentbutton]} onPress = {() => {this.changeStatusToAbsent}}>
        <Text>Absent</Text> 
        </TouchableOpacity>
        </View>
      ) )}
      <View style = {{marginTop: 17.5}}>
      <Button title = "submit" onPress = {()=>{
        this.props.navigation.navigate('SummaryScreen')
      }}/>
      </View>
      </View>
    )
  } else if(this.state.status === 'present'){
      return(
      <View>
      <AppHeader/>
      {this.state.all_students.map((aStudent) => (
        <View style = {styles.student}>
        <Text style = {styles}>{aStudent.name.toUpperCase()}</Text>
        <TouchableOpacity style = {[styles.presentbutton]} onPress = {() => {this.changeStatusToPresent}}>
        <Text>Present</Text> 
        </TouchableOpacity>
       <TouchableOpacity style = {[styles.absentbutton], {backgroundColor: 'green'}} onPress = {() => {this.changeStatusToAbsent}}>
        <Text>Absent</Text> 
        </TouchableOpacity>
        </View>
      ) )}
      <View style = {{marginTop: 17.5}}>
      <Button title = "submit" onPress = {()=>{
        this.props.navigation.navigate('SummaryScreen')
      }}/>
      </View>
      </View>
    )  
  }
  }
}

const styles = StyleSheet.create({
  student: {
    marginTop: 25,
    flexDirection: "row",
    fontSize: 10,
    fontFamily: "verdana",
    marginLeft: 10,
    justifyContent: "space-between"
  },
  absentbutton: {
   borderWidth: 2,
   width: 100, 
   height: 25,
   alignItems: "center",
   marginLeft: -100,
   marginRight: 10
   },
   presentbutton:{
   borderWidth: 2,
   width: 100, 
   height: 25,
   alignItems: "center",
   marginRight: 50
   }
})