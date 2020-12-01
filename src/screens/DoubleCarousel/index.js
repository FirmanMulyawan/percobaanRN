/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  Button,
  Dimensions,
} from 'react-native';
let deviceWidth = Dimensions.get('window').width;
import DATA from './Data';
const Index = () => {
  const [state, setstate] = React.useState(0);
  const flatListRef = useRef(null);
  const next = () => {
    setstate((prev) => {
      flatListRef.current.scrollToIndex({animated: true, index: prev + 1});
      return prev + 1;
    });
  };
  const prevV = () => {
    setstate((prev) => {
      flatListRef.current.scrollToIndex({animated: true, index: prev - 1});
      return prev - 1;
    });
  };

  let arrays = [];
  let size = 2;
  let newData = [...DATA];
  while (newData.length > 0) {
    arrays.push(newData.splice(0, size));
  }
  const renderItem = ({item, index}) => {
    return (
      <View style={{width: deviceWidth}} key={index}>
        <View style={{marginHorizontal: 20}}>
          <View style={styles.item}>
            <Text style={styles.title}>{item[0].title}</Text>
          </View>
          {item.length > 1 ? (
            <View style={[styles.item, {backgroundColor: 'pink'}]}>
              <Text style={styles.title}>{item[1].title}</Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={arrays}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 50,
        }}>
        {state === 0 ? (
          <Button title="PrevSalah" />
        ) : (
          <Button title="Prev" onPress={prevV} />
        )}
        <Text>Titik</Text>
        {state >= arrays.length - 1 ? (
          <Button title="NextSalah" />
        ) : (
          <Button title="Next" onPress={next} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default Index;
