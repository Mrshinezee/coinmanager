/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputGroup from './components/InputGroup';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        email:'',
        password: 'g'
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
                  value={this.state.email}
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
                      <Text 
                        style={styles.buttonText} 
                        onPress={() => this.props.navigation.navigate('Dashboard')}> 
                        Login
                        </Text>
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
    backgroundColor: '#FFFFFF',
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
    width: wp('90%'),
    height: hp('30'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOpacity: 0.85,
    shadowRadius: 2.22,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 4,
    },
  inputBox: {
    width: wp('80%'),
    backgroundColor: '#eeeeee', 
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: hp('2%'),
    color: '#002f6c',
    margin: 10
},
button: {
    width: wp('80%'),
    backgroundColor: '#F69517',
    marginVertical: 10,
    paddingVertical: 12
},
buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
},
text: {
  fontSize:24,
  color:'white',
  textAlign:'center',
},
withShadow: {
  margin: 5,
  height: 150,
  width: 300,
  backgroundColor: 'white',
  shadowColor: "#000",
  shadowOpacity: 0.85,
  shadowRadius: 2.22,
  shadowOffset: {
    height: 2,
    width: 0
  },
  elevation: 4,
}
});

export default Login;
