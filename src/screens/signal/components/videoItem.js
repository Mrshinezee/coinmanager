import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class videoItem extends Component {
  render() {
    let { video } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: video.url,
          }}
          style={{ height: 200 }}
        />
        <View style={styles.descContainer}>
          <Image
            source={{ uri: video.channel }}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
          <View style={styles.videoDetails}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoStats}>55,788 views</Text>
          </View>
          <TouchableOpacity>
            <Icon name="more-vert" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  descContainer: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  videoDetails: {
    paddingHorizontal: 16,
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    color: '#3c3c3c',
  },
});

export default videoItem;
