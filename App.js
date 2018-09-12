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

const Application = StackNavigator({
  Home: { screen: Login},
  Profile: { screen: Profile},
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


