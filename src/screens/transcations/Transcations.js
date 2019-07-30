import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Transcations extends Component {
    static navigationOptions = {
        // headerTitle: <LogoTitle />,
        // headerTitleStyle: headerStyle(),
        tabBarIcon:  <Icon name="subject" size={25} />,
        // title: title(),
        tabBarLabel: 'Transcations',
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>Transcations</Text>
            </View>
        );
    }
}

export default Transcations;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});