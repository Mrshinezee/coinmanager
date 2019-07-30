import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class DisplayBoard extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.UpperContainer}>
                    <Text style={styles.displayText}>Main Portfolio</Text>
                    <Text style={styles.displayText}>24HR</Text>
                </View>
                <View style={styles.LowerContainer}>
                    <Text style={styles.displayText}>$0</Text>
                    <Icon name="assessment" size={15} color='white' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        margin: 10,
        padding: 10,
        backgroundColor: '#F69517',
        borderRadius: 20,
    },
    UpperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        margin: 10,
    },
    LowerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        margin: 10,
    },
    displayText: {
        color: 'white',
    },
})

export default DisplayBoard;