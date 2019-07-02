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
import Store from './src/Stores';
import AppNavigator from './src/Navigator/AppNavigator'



const App = () => (
      <Provider store={ Store }>
          <AppNavigator />
      </Provider>
    );

export default App;
