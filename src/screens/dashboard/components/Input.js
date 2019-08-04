import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({
    value, label, ...rest
}) => {
        return (
                <View style={{padding: 5}}>
                    <View style={styles.label}>
                        <Text style={styles.labelText} >{label}</Text>
                    </View>
                    <TextInput
                    {...rest}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 2, padding: 10}}
                    value={value}
                    />
                </View>
        );
}

const styles = StyleSheet.create({
    label: {
        padding: 5,
    },
    labelText: {
        color: 'black',
        textTransform: 'uppercase',
        fontSize: 15,
    }
});

export default Input;