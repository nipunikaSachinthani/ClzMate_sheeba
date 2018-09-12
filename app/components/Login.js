
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
            email :'',
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
        <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
       <ImageBackground source={require('../../img/a.jpg')}
       style={styles.backgroundImage}>
        
        <View style = {styles.container}>
        
           

            <TextInput
            style = {styles.textInput} 
            keyboardType = 'email-address'
            placeholder = 'Enter your email'
            placeholderTextColor = 'black'
            underlineColorAndroid = 'transparent'
            onChangeText={ (email ) => this.setState({email})}
                                
            />

           <TextInput
            style = {styles.textInput} 
            keyboardType = 'default'
              placeholder = 'Enter Your password'
              secureTextEntry = {true}
              underlineColorAndroid = 'transparent' 
            onChangeText={ (password) => this.setState({password})}
                               
            />

            <TouchableOpacity  
                style = {styles.btn}
                onPress = {this.login}> 
                <Text style={styles.logText}> Log in </Text>
            </TouchableOpacity>
     
           
        </View>
        </ImageBackground>
        </KeyboardAvoidingView> 
     
    );
  }
  login = () => {
      //alert(this.state.email);
      fetch('http://localhost:3000/user/login',{
          method: 'POST',
          headers: {
            'Content-type':'application/json',
          },
          body: JSON.stringify({
              email   :this.state.email ,
              password:this.state.password,
          })
      })
      .then((res) => res.json())
      .then((res) =>{
          alert(response.message);
          if(res.body === true) {
              AsyncStorage.setItem('user', res.user);
              this.props.navigation.navigate('Profile');
          }
          else{
             alert('no responce');
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
       // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#1976d2',
        paddingLeft: 40,
        paddingRight: 40,
    },
   
    header:{
        fontSize: 24,
        marginBottom: 60,
        color: 'black',
        fontWeight: 'bold',
    },

    textInput:{
       alignSelf: 'stretch',
       padding: 20,
       marginBottom: 30,
       backgroundColor: 'rgba(10,20,150,0.25)',
       alignItems: 'center',
       borderColor: 'gray',

    },

    btn:{
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        padding: 20,
        alignItems: 'center',
        marginBottom: 60,
        },
    logText:{
        fontSize:16,
    

    },
});