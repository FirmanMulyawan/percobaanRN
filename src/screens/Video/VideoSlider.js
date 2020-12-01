/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Slider from '@react-native-community/slider';

const VideoSlider = ({value, maximumValue, onValueChange, ...props}) => {
  const percentage = (value / maximumValue) * 100;

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.sliderTrack}>
        <View style={[styles.sliderPrevTrack, {width: percentage + '%'}]} />
        <View style={[styles.sliderThumb, {left: percentage + '%'}]} />
        <View
          style={[styles.sliderNextTrack, {width: 100 - percentage + '%'}]}
        />
      </View>
      <Slider
        style={{position: 'absolute', right: 0, left: 0, height: 23}}
        minimumValue={0}
        maximumValue={maximumValue}
        value={value}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbTintColor="transparent"
        onValueChange={onValueChange}
        {...props}
      />
    </View>
  );
};

export default VideoSlider;
