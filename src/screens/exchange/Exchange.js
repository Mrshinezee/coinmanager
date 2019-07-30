import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Exchange extends Component {
    static navigationOptions = {
        // headerTitle: <LogoTitle />,
        // headerTitleStyle: headerStyle(),
        tabBarIcon: <Icon name="account-balance" size={25} />,
        // title: title(),
        tabBarLabel: 'Exchanges',
      };

    render() {
        return (
            <View style={styles.container}>
                <Text>Exchange</Text>
            </View>
        );
    }
}

export default Exchange;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});