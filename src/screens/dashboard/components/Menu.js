import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menubuttons}>
                        <View style={styles.menucontainer}>
                            <Image
                            style={{width: 30, height: 30}}
                            source={require('../assests/icons/PNG/library.png')}
                            />
                        </View>
                        <Text style={styles.menutext}>Exchange</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubuttons}>
                        <View style={styles.menucontainer}>
                            <Image
                            style={{width: 30, height: 30}}
                            source={require('../assests/icons/PNG/library.png')}
                            />
                        </View>
                        <Text style={styles.menutext}>Exchange</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubuttons}> 
                        <View style={styles.menucontainer}>
                            <Image
                            style={{width: 30, height: 30}}
                            source={require('../assests/icons/PNG/briefcase.png')}
                            />
                        </View>
                        <Text style={styles.menutext}>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubuttons}>
                   <View style={styles.menucontainer}>
                            <Image
                            style={{width: 30, height: 30}}
                            source={require('../assests/icons/PNG/users.png')}
                            />
                    </View>
                    <Text style={styles.menutext}>Profile</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     margin: 5,
     paddingTop: 10,
     paddingLeft: 5,
     paddingRight: 5,
    },
    menucollection: {
        borderColor: '#EBEBEB',
        borderWidth: 1,

    },
    menubuttons: {
        height: 60,
        width: 60,
        borderColor: '#EBEBEB',
        borderWidth: 1,
        borderRadius: 30,
        position: 'relative',
    },
    menucontainer: {
        textAlign: 'left',
        height: 30,
        width: 30,
        position: 'absolute',
        top: 15,
        left: 15,
    },
    menutext: {
        textAlign: 'left',
        position: 'absolute',
        fontSize: 10,
        bottom: -10,
        left: 15,
    }
});

export default Menu;