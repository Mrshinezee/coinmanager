/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import {Header, CryptoContainer} from './src/components';
import Store from './src/Stores';


export default class App extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <View style={styles.container}>
          <Header />
          <CryptoContainer/>
        </View>
      </Provider>
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
