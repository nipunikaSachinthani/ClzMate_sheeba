import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { Button, TextInput, Text, Choice } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { StackActions, NavigationActions } from 'react-navigation';


class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            email: '',
            phoneno: '',
            password: '',
            userType:'',
        }
    }


    register = () => {
        fetch('https://mighty-taiga-45064.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                fullname: this.state.fullname,
                username: this.state.username,
                email: this.state.email,
                phoneno: this.state.phoneno,
                password: this.state.password
            })
        })

            .then((response) => response.json())
            .then((res) => {

                if (res.state === true) {
                    alert('Congratulations ! You Just Registerd Successfully. Now login using your username and password to start using TidyMaster')
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Login' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                } else {
                    alert(res.msg)
                }
            })
            .done();
    }

    render() {
        return (
            
            <View style={styles.container}>
                
                <TextInput rkType='rounded' label='Fullname' style={styles.input}
                    onChangeText={(fullname) => this.setState({ fullname })} />
               
                <TextInput rkType='rounded' label='Username' style={styles.input} 
                    onChangeText={(username) => this.setState({ username })}/>

                <TextInput rkType='rounded' label='Email' style={styles.input}
                    onChangeText={(email) => this.setState({ email })} />

                <TextInput rkType='rounded' label='PhoneNo' style={styles.input}
                    onChangeText={(phoneno) => this.setState({ phoneno })} />

                <TextInput rkType='rounded' label='Password' style={styles.input}
                    onChangeText={(password) => this.setState({ password })} secureTextEntry={true}/>

                        <RadioGroup
                        style={{flexDirection: 'row'}}
                        size={20}
                        thickness={1}
                        color='#ffffff'
                     

                        onSelect={(userType) => this.setState({userType})}>

                            <RadioButton value={'Customer'} >
                                <Text>Customer</Text>
                            </RadioButton>

                            <RadioButton value={'Cleaner'} >
                                <Text>Cleaner</Text>
                            </RadioButton>
                        </RadioGroup>

                <Button style={styles.btn} onPress={this.register}>
                    Register now !
                </Button>
               
               
            </View>
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1976d2'

    },
    input: {
        paddingHorizontal: 30,
        marginHorizontal: 20,
        borderWidth: 2,
        backgroundColor: '#ffffff'
    },
    btn: {
        marginTop: 10,
        backgroundColor: '#2e7d32',
        width: 200,
    },
    txt: {
        marginTop: 20,
        alignItems: 'flex-end',
        color: 'white',
        fontWeight: 'bold'
    },
    btnText: {
        backgroundColor: '#1976d2'
    }
});



export default Register;
