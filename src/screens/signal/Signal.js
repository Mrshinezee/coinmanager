import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
import Data from './util/data';

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
            <ScrollView style={styles.body}>
              {Data.map(content => (
                <VideoItem video={content} />
              ))}
            </ScrollView>
          </View>
        );
      }
}

export default Signal;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      flex: 1,
    },
  });
