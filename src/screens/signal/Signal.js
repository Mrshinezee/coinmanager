import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Signal extends Component {
    static navigationOptions = {
        // headerTitle: <LogoTitle />,
        // headerTitleStyle: headerStyle(),
        tabBarIcon:   <Icon name="timeline" size={25} />,
        // title: title(),
        tabBarLabel: 'Signal',
      };

    render() {
        return (
            <View style={styles.container}>
                <Text>Signal</Text>
            </View>
        );
    }
}

export default Signal;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});