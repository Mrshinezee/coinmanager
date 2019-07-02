import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CryptoContainer extends Component {
    render() {
        return (
            <View>
                <Text>Container</Text>
            </View>
        );
    }
}

function mapStateToprops(state){
    return{
        crypto: state.crypto
    }
}

export default connect(mapStateToprops)(CryptoContainer);