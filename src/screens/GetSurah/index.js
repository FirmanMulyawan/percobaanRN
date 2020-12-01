import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NamaQuran from '../../Constant/ayahQuran';

const Index = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('GetQuran', {
          itemId: item.id,
        });
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.nameAyah}</Text>
        <Text style={styles.title}>Ayatss {item.ayah}</Text>
        <Text style={styles.title}>Jenis Ayat {item.jenisAyah}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={NamaQuran}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
