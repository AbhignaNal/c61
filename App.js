import * as React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}
const switchscreens = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  SummaryScreen: {screen: SummaryScreen},
})

const AppContainer = createAppContainer(switchscreens)