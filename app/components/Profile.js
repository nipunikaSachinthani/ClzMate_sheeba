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
  ImageBackground,
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Profile extends Component {
    
   /* componentDidMount(){
        this._loadInitialState().done();
}
         _loadInitialState = async() => {

        var value = await AsyncStorage.getItem('user');

        if(value!==null){
            this.props.navigation.navigate('Profile');
        }
    }*/
 
    render() {
    return (
       
        
        
        
        <View style = {styles.container}>
            <Text style = {styles.header}>
                   Welcome to the Member Area
            </Text>

        </View>
        
        
     
    );
  }
} 

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#8B4513',
   },
});