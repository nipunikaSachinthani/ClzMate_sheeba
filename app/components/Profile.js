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
  TouchableOpacity,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';



export class Profile extends Component {
    
  
    render() {
    return (
       
         <View style = {styles.container}>
            <Text style = {styles.header}>
                   
            </Text>
            <TouchableOpacity  
                style = {styles.btn1}
                > 
                <Text style={styles.QR}> Scan QR code  </Text>
            </TouchableOpacity>

        </View>
        
        
     
    );
  }
} 

const styles = StyleSheet.create({
   container: {
    
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#ffff',
    
   },
   QR:{
    color:'#ffff',
    fontSize:24,
   },
   btn1:{
    alignItems: 'center',
    justifyContent: 'center',
    height:300,
    width:300,
    backgroundColor:'black',
    paddingBottom:20,
    marginTop:180,
   }
});
export default Profile;