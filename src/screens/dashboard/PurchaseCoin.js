import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class PurchaseCoin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity> <Text>Buy</Text></TouchableOpacity>
                <TouchableOpacity><Text>Sell</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F69517',
      justifyContent: 'flex-start',
      color: 'white',
    },
});
export default PurchaseCoin;
