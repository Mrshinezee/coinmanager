/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View><Text>Login</Text></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    borderWidth: 10,
  },
});

export default Login;
