import React from 'react';
import { StyleSheet } from 'react-native';

import Home from './components/Home'
import Profile from './components/Profile'
import Feed from './components/Feed'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const  {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="Profile" component={Profile}></Screen>
        <Screen name="Feed" component={Feed}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});