
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage, 
  ImageBackground,
} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            Username :'',
            password :'',
        }
    }

    componentDidMount(){
        this._loadInitialState().done();
}
         _loadInitialState = async() => {

        var value = await AsyncStorage.getItem('user');

        if(value!==null){
            this.props.navigation.navigate('Profile');
        }
    }
    
    render() {
    return (
        <ImageBackground source={require('../../img/a.jpg')}
       style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
       
        
        <View style = {styles.container}>
        
           

            <TextInput
            style = {styles.textInput} 
            
            placeholder = 'Enter your Username'
            placeholderTextColor = 'black'
            underlineColorAndroid = 'transparent'
            onChangeText={ (Username ) => this.setState({Username})
             }
                                
            />

           <TextInput
            style = {styles.textInput} 
            keyboardType = 'default'
              placeholder = 'Enter Your password'
              secureTextEntry = {true}
              underlineColorAndroid = 'transparent' 
            onChangeText={ (password) => this.setState({password})
             }
                               
            />

            <TouchableOpacity  
                style = {styles.btn}
                onPress = {this.login}> 
                <Text style={styles.logText}> Log in </Text>
            </TouchableOpacity>
     
           
        </View>
       
        </KeyboardAvoidingView> 
        </ImageBackground>
     
    );
  }
  login = () => {
      
      fetch('http://localhost:3000/user/login',{
          method: 'POST',
          headers: {
            'Content-type':'application/json',
          },
          body: JSON.stringify({
              Username : this.state.Username ,
              password : this.state.password,
          })
      })

         .then((res) => res.json())
         .then((res) =>{
          
             if(res.body === true) {
                  AsyncStorage.setItem('token', res.token);
                  this.props.navigation.navigate('Profile');
          }
          else{
             alert('no responce from backend');
          }
      }) 
      .done();
  }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        
    },
   

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
   
    

    textInput:{
       alignSelf: 'stretch',
       borderRadius: 4,
       padding: 20,
       marginBottom: 30,
       backgroundColor: 'rgba(10,20,150,0.25)',
       alignItems: 'center',
       justifyContent: 'center',
       

    },

    btn:{
        alignSelf: 'stretch',
        backgroundColor: 'rgba(10,60,250,0.75)',
        padding: 20,
        alignItems: 'center',
        marginBottom: 60,
        },
    logText:{
        fontSize:16,
    

    },
});