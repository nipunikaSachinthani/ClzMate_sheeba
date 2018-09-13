/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
//import Splash from './app/components/Splash';
//import SplashScreen from 'react-native-splash-screen';

const Application = StackNavigator({
  Home: { screen: Login},
  Profile: { screen: Profile},
  //Splash: { Screen: Splash},
},{
 mode:'model',
 headerMode:'none'
  
});

export default class App extends Component {
  render() {
    return ( 
     <Application />
    );
  }
}
//export default Navigation;


