import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
              <Text style={styles.title}>Coinmanager</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      backgroundColor: '#F6C063',
      alignSelf: 'stretch',
      alignSelf: 'flex-start',
      padding: 10,
      margin: 10,
    },
    title: {
      textAlign: 'center',
      padding: 5,
    }
  });

export default Header;