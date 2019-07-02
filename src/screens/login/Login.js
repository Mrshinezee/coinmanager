/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        email:'',
        password: ''
    }
}


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.loginContent}> 
            <View style={styles.logo}>
             <Image
                style={ {width: 80, height: 80} }
                source={{uri: 'https://res.cloudinary.com/dowmiccxo/image/upload/v1562076236/Screenshot_2019-07-02_at_8.04.41_AM.png'}}
              />
            </View>
            <View style={styles.form}>
                  <TextInput style={styles.inputBox}
                  onChangeText={(email) => this.setState({email})}
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  placeholderTextColor = "#002f6c"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}/>
                  
                  <TextInput style={styles.inputBox}
                  onChangeText={(password) => this.setState({password})} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#002f6c"
                  ref={(input) => this.password = input}
                  />

                  <TouchableOpacity style={styles.button}> 
                      <Text style={styles.buttonText} onPress={this.saveData}>Login</Text>
                  </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={styles.footerTitle}>Forgot your password</Text>
            </View>
            <View>
              <Text>Don't have an account yet? Register</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginContent: {
    textAlign: 'center'
  },
  logo: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  footerTitle: {
    color: '#F69517',
    margin: 5,
    padding: 5,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderColor: '#F69517',
    borderWidth: 1,
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee', 
    padding: 10,
    fontSize: 16,
    color: '#002f6c',
    margin: 10
},
button: {
    width: 300,
    backgroundColor: '#F69517',
    marginVertical: 10,
    paddingVertical: 12
},
buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
}
});

export default Login;
