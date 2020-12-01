/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressCircle from './progress-circle';
const Index = () => {
  return (
    <ProgressCircle
      style={styles.wrapperProgressCircle}
      progress={0.3}
      progressColor={'red'}
      backgroundColor={'blue'}
      startAngle={-Math.PI * 1}
      cornerRadius={20}
      strokeWidth={6}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Hallo</Text>
      </View>
    </ProgressCircle>
  );
};

const styles = StyleSheet.create({
  wrapperProgressCircle: {
    height: 65,
    width: 65,
    borderRadius: 100,
    marginBottom: 100,
  },
});
export default Index;
