/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppNavigator from './src/Navigator/AppNavigator'
import configureStore from './src/Stores';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        }
      persistor={persistor}
    >
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export const styles = {
  activityContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
};

export default App;
