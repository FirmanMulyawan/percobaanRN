import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Index = () => {
  return (
    <View style={styles.wrapper}>
      <Text>By Word</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
