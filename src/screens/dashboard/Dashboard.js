import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LogoTitle from './components/Logo';
import Menu from './components/Menu';
import Exchange from './components/Exchange';

class Dashboard extends Component {
      static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
        ),
      };
    
    
    render() {
        return (
            <View style={styles.container}>
                <Menu/>
                <Exchange/>
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
});

export default Dashboard;