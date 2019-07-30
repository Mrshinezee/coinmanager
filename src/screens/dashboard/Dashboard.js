import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoTitle from './components/Logo';
import DisplayBoard from './components/DisplayBoard';
import LoadCoins from './components/LoadCoins';

class Dashboard extends Component {
    
      static navigationOptions = {
        headerTitle: 'CoinMaker',
        // headerTitleStyle: headerStyle(),
        tabBarIcon:  <Icon name="dashboard" size={25} />,
        // title: title(),
        tabBarLabel: 'Dashboard',
      };
    
    
    render() {
        return (
            <View style={styles.container}>
                <DisplayBoard/>
                <LoadCoins/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      justifyContent: 'flex-start',
    },
    tabBar: {
      backgroundColor: 'white',
      height: 60,
      borderTopWidth: 0.5,
      borderColor: '#E5E5E5',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabTitle: {
      fontSize: 11,
      color: '#3c3c3c',
      paddingTop: 3,
    },
  
});

export default Dashboard;