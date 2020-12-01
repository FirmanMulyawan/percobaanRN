/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';

const APILoading = () => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    isError: false,
  });

  // Mount User Method
  useEffect(() => {
    getGithubUser();
  }, []);

  //   Get Api Users
  const getGithubUser = async () => {
    try {
      const response = await Axios.get(
        'https://api.github.com/users?since=135',
      );
      setState({isError: false, isLoading: false, data: response.data});
    } catch (error) {
      setState({isLoading: false, isError: true});
    }
  };

  if (state.isLoading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  } else if (state.isError) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Terjadi Error Saat Memuat Data</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={state.data}
      renderItem={({item}) => (
        <View style={styles.viewList}>
          <View>
            <Image source={{uri: `${item.avatar_url}`}} style={styles.Image} />
          </View>
          <View>
            <Text style={styles.textItemLogin}> {item.login}</Text>
            <Text style={styles.textItemUrl}> {item.html_url}</Text>
          </View>
        </View>
      )}
      keyExtractor={({id}, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  viewList: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40,
  },
  textItemLogin: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16,
  },
  textItemUrl: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'blue',
  },
});

export default APILoading;
