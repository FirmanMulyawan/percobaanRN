/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = () => {
  const [entries, setEntries] = useState([]);
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToPrev();
  };
  const goNext = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.illustration}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 130}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={(index) => setSlider1ActiveSlide(index)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={goForward}
          style={{backgroundColor: 'red', padding: 20}}>
          <Text>Prev</Text>
        </TouchableOpacity>
        <View style={styles.pagination} pointerEvents="none">
          <View
            style={[
              styles.paginationDot,
              slider1ActiveSlide === 0
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
          <View
            style={[
              styles.paginationDot,
              slider1ActiveSlide !== 0 &&
              slider1ActiveSlide !== entries.length - 1
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
          <View
            style={[
              styles.paginationDot,
              slider1ActiveSlide === entries.length - 1
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        </View>
        <TouchableOpacity
          onPress={goNext}
          style={{backgroundColor: 'pink', padding: 20}}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 200,
    height: screenWidth,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  pagination: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationDotActive: {backgroundColor: 'green'},
  paginationDotInactive: {backgroundColor: 'pink'},
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
