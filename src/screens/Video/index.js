import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VideoAdit from './VideoAdit';
const Index = () => {
  return (
    <View style={styles.container}>
      <VideoAdit />
      <View style={styles.wrapper}>
        <Text>Hallo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default Index;
