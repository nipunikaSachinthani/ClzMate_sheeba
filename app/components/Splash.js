

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  ActivityIndicator, 
  Dimensions,
  Modal,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
//import SplashScreen from 'react-native-splash-screen';

export default class Splash extends Component {
    static navigationOption = {
        header:null 
    }
    componentWillMount(){
        setInterval(()=>{
            this.props.navigation.navigate('Login')
        },4000)
    }
           
 
    render() {
    return (
       
        
        < ImageBackground source = {require('../../img/d.jpg')}
        style={styles.backgroundImage}>
        
        <View style = {styles.container}>
           

        </View>
        
        </ ImageBackground>
     
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
   backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    
},

});