/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Quran from '../../../Constant/quran';

const Index = ({route}) => {
  const [loading, setLoading] = useState(false);
  let {itemId} = route.params;

  const orderAscBy = (data, orderFunc) => {
    return data.sort((item1, item2) => {
      const val1 = orderFunc(item1);
      const val2 = orderFunc(item2);
      return val1 - val2;
    });
  };

  const groupBy = (data) => {
    return data.reduce((acc, current) => {
      const aya = current.aya;
      const groupedAya = acc[aya];
      if (groupedAya) {
        groupedAya.push(current);
      } else {
        acc[aya] = [current];
      }
      return acc;
    }, {});
  };

  const formatData = (data) => {
    const sortedByAya = orderAscBy(data, (item) => {
      return item.aya;
    });
    const groupedByAya = groupBy(sortedByAya, (item) => {
      return item.aya;
    });
    // sorted words in aya
    Object.keys(groupedByAya).forEach((key) =>
      orderAscBy(groupedByAya[key], (item) => item.word),
    );

    // create aya object with full words
    const flatListItems = Object.keys(groupedByAya).reduce((acc, key) => {
      const wordsObj = groupedByAya[key];
      if (!wordsObj) {
        return acc;
      }

      const words = wordsObj.map((obj) => obj.id);
      const ar = wordsObj.map((obj) => obj.ar);
      const ayaNumber = wordsObj[0].aya;
      // const fullAya = `${words.join(' ')} ${ayaNumber}`;
      const fullAya = `${words.join(' ')}`;
      const fullAr = `${ar.join(' ')}`;

      const flatListItem = {
        aya: ayaNumber,
        message: fullAya,
        ar: fullAr,
      };
      acc.push(flatListItem);

      return acc;
    }, []);

    return flatListItems;
  };

  const FlatListItemSeparator = () => {
    return <View style={{height: 2, backgroundColor: 'blue'}} />;
  };
  const renderItem = ({item, index}) => {
    return (
      <>
        <View style={styles.item}>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View>
              <Text style={styles.title}>{item.ar}</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                height: 30,
                width: 30,
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 20}}>{item.aya}</Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>{item.message}</Text>
          </View>
        </View>
      </>
    );
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    startLoading();
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={formatData(Quran[itemId])}
          renderItem={renderItem}
          ItemSeparatorComponent={FlatListItemSeparator}
          keyExtractor={(item, index) => 'forIDS' + index}
          ListHeaderComponent={<View style={{paddingTop: 20}} />}
          ListFooterComponent={<View style={{paddingBottom: 200}} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#F9EFFB',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontFamily: 'KFGQPCUthmanTahaNaskh-Bold',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default Index;
