
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
        <ImageBackground source={require('../../img/e.jpg')}
       style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
       
        
        <View style = {styles.container}>
        
           

            <TextInput
            style = {styles.textInput} 
            
            placeholder = 'Enter your Username'
            placeholderTextColor = 'black'
            underlineColorAndroid = 'transparent'
            onChangeText={ (email ) => this.setState({email})
             }
                                
            />

           <TextInput
            style = {styles.textInput} 
            keyboardType = 'default'
              placeholder = 'Enter Your password'
              secureTextEntry = {true}
              placeholderTextColor = 'black'
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
      
      fetch('https://polar-meadow-28819.herokuapp.com/user/login',{
          method: 'POST',
          headers: {
            'Content-type':'application/json',
          },
          body: JSON.stringify({
              email : this.state.email ,
              password : this.state.password,
          })
      })

         .then((responce) => responce.json())
         .then((res) =>{
            if(res.state === true) {
                alert('Succesfully Loged in');
                AsyncStorage.setItem('token', res.JWT_Token);
                this.props.navigation.navigate('Profile');
            }
            else{
                alert('No Responce');
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
       backgroundColor: 'rgba(139,69,19,0.5)',
       alignItems: 'center',
       justifyContent: 'center',
       

    },

    btn:{
        alignSelf: 'stretch',
        backgroundColor: 'rgba(139,69,19,0.9)',
        padding: 20,
        alignItems: 'center',
        marginBottom: 60,
        },
    logText:{
        fontSize:16,
    

    },
});