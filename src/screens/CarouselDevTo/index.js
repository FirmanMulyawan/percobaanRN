/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useCallback, useEffect, memo} from 'react';
import {
  Dimensions,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const SlideList = Array.from({length: 10}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `Judul ${i + 1}`,
  };
});

const Slide = memo(function Slide({data}) {
  return (
    <View style={styles.slide}>
      <Image source={{uri: data.image}} style={styles.slideImage} />
      <Text style={styles.slideTitle}>{data.title}</Text>
    </View>
  );
});

// const Pagination = ({index}) => {
//   return (
//     <View style={styles.pagination} pointerEvents="none">
//       {SlideList.map((_, i) => {
//         return (
//           <View
//             key={i}
//             style={[
//               styles.paginationDot,
//               index === i
//                 ? styles.paginationDotActive
//                 : styles.paginationDotInactive,
//             ]}
//           />
//         );
//       })}
//     </View>
//   );
// };

const Pagination = ({index}) => {
  return (
    <View style={styles.pagination} pointerEvents="none">
      <View
        style={[
          styles.paginationDot,
          index === 0
            ? styles.paginationDotActive
            : styles.paginationDotInactive,
        ]}
      />
      <View
        style={[
          styles.paginationDot,
          index !== 0 && index !== SlideList.length - 1
            ? styles.paginationDotActive
            : styles.paginationDotInactive,
        ]}
      />
      <View
        style={[
          styles.paginationDot,
          index === SlideList.length - 1
            ? styles.paginationDotActive
            : styles.paginationDotInactive,
        ]}
      />
    </View>
  );
};
const Carousel = () => {
  const [indexAktif, setIndex] = useState(0);
  const carouselNya = useRef(0);
  const indexRef = useRef(indexAktif);
  indexRef.current = indexAktif;

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const posisi = event.nativeEvent.contentOffset.x / slideSize;
    const roudIndex = Math.round(posisi);
    const distance = Math.abs(roudIndex - posisi);
    const isNoMansLand = distance > 0.4;
    if (roudIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roudIndex);
    }
  }, []);

  useEffect(() => {
    console.log('ini index', indexAktif);
  }, [indexAktif]);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((e) => e.id.toString(), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slide data={item} />;
  }, []);

  const prevFunc = () => {
    if (indexAktif <= 0) {
      return SlideList.length - 1;
      // return 0;
    } else {
      return indexAktif - 1;
    }
  };

  const nextFunc = () => {
    if (indexAktif >= SlideList.length - 1) {
      // return DATA.length - 1;
      return 0;
    } else {
      return indexAktif + 1;
    }
  };
  const prev = () => {
    // setIndex(prevFunc());
    carouselNya.current.scrollToIndex({animated: false, index: prevFunc()});
  };
  const next = () => {
    // setIndex(nextFunc());
    carouselNya.current.scrollToIndex({animated: false, index: nextFunc()});
  };
  return (
    <>
      <FlatList
        ref={carouselNya}
        data={SlideList}
        style={{flex: 1}}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'cyan',
          marginHorizontal: 20,
        }}>
        <View>
          <TouchableOpacity onPress={prev}>
            <Text style={{padding: 20, backgroundColor: 'red'}}>Prev</Text>
          </TouchableOpacity>
        </View>
        <Pagination index={indexAktif} />
        <View>
          <TouchableOpacity onPress={next}>
            <Text style={{padding: 20, backgroundColor: 'blue'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  slideImage: {width: windowWidth * 0.9, height: windowHeight * 0.7},
  slideTitle: {fontSize: 24},
  pagination: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  paginationDotActive: {backgroundColor: 'red'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1},
});

export default Carousel;
