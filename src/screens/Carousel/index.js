/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Satu',
  },
  {
    id: '2',
    title: 'Dua',
  },
  {
    id: '3',
    title: 'Tigass',
  },
  {
    id: '4',
    title: 'Empat',
  },
  {
    id: '5',
    title: 'Lima',
  },
  {
    id: '6',
    title: 'Enam',
  },
  {
    id: '7',
    title: 'Tujuh',
  },
  {
    id: '8',
    title: 'Delapan',
  },
];

let deviceWidth = Dimensions.get('window').width;
const Index = () => {
  const [state, setState] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const carouselNya = useRef(null);
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const onViewRef = React.useRef((viewableItems) => {
    setState(viewableItems.viewableItems[0].index);
    // Use viewable items in state or as intended
  });

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return (
      <>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={[styles.item, {backgroundColor}]}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  const dotItem = ({item, index}) => {
    console.log('ini index', index);
    return (
      <>
        {index === state ? (
          <View style={styles.viewDotBig}>
            <View style={styles.viewDotCenter} />
          </View>
        ) : (
          <View style={styles.viewDot} />
        )}
      </>
    );
  };
  const prevFunc = () => {
    if (state <= 0) {
      return DATA.length - 1;
      // return 0;
    } else {
      return state - 1;
    }
  };

  const nextFunc = () => {
    if (state >= DATA.length - 1) {
      // return DATA.length - 1;
      return 0;
    } else {
      return state + 1;
    }
  };
  const prev = () => {
    carouselNya.current.scrollToIndex({animated: false, index: prevFunc()});
  };
  const next = () => {
    carouselNya.current.scrollToIndex({animated: false, index: nextFunc()});
  };
  return (
    <>
      <FlatList
        data={DATA}
        ref={carouselNya}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
        pagingEnabled={true}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'cyan',
          marginHorizontal: 20,
        }}>
        <View>
          <TouchableOpacity onPress={prev}>
            <Text style={{padding: 30, backgroundColor: 'red'}}>Prev</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={dotItem}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(el) => el.id}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}
        />
        <View>
          <TouchableOpacity onPress={next}>
            <Text style={{padding: 30, backgroundColor: 'blue'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotItem: {
    backgroundColor: 'yellow',
    margin: 10,
  },
  title: {
    fontSize: 32,
  },
  viewDot: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDotCenter: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  viewDotBig: {
    backgroundColor: 'red',
    width: 25,
    height: 25,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
