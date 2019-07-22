import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class Exchange extends Component {
    render() {
        return (
            <View style={styles.exchangeContainer}>

                <Text>Explore Exchanges</Text>
                <View style={styles.exchangeList}>
                    <View style={styles.exchangemenu}>
                            <Image
                            style={{width: 80, height: 60}}
                            source={require('../assests/image/bittrex.png')}
                            />
                            <View style={styles.exchangemenufooter}>
                            <Text>Bittrex</Text>
                        </View>
                    </View>
                    <View style={styles.exchangemenu}>
                        <Image
                                style={{width: 80, height: 60}}
                                source={require('../assests/image/poloniex.jpg')}
                                />
                        <View style={styles.exchangemenufooter}>
                            <Text>poloniex</Text>
                        </View>
                    </View>
                    <View style={styles.exchangemenu}>
                        <Image
                            style={{width: 80, height: 60}}
                            source={require('../assests/image/binance.jpg')}
                            />
                         <View style={styles.exchangemenufooter}>
                            <Text>Binance</Text>
                        </View>
                    </View>
                    <View style={styles.exchangemenu}>
                            <Image
                            style={{width: 80, height: 60}}
                            source={require('../assests/image/hitbtc.png')}
                            />
                            <View style={styles.exchangemenufooter}>
                            <Text>HitBTC</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    exchangeContainer: {
        margin: 10,
        padding: 10,
    },
    exchangeList: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     flexWrap: 'wrap',
     margin: 10,
    },
    exchangemenu: {
        borderColor: '#EBEBEB',
        position: 'relative',
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        height: 120,
        padding: 10,
        margin: 10,
    },
    exchangemenufooter: {
        backgroundColor: '#F69517',
        borderRadius: 5,
        textAlign: 'center',
        position: 'absolute',
        padding: 5,
        width: 100,
        bottom: 0,
    },
    exchangemenufooterText: {
        textAlign: 'center',
    },

})

export default Exchange;