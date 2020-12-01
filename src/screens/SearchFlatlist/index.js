import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LiveSearch from '../LiveSearch';

const Index = () => {
  const [state, setState] = React.useState({
    isLoading: true,
    searchValue: '',
    data: [],
    arrayholder: [],
    isSearchActive: false,
  });

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        setState({
          ...state,
          isLoading: false,
          data: responseJson,
          arrayholder: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const GetFlatListItem = (name) => {
    Alert.alert(name);
  };

  const searchData = (text) => {
    const newData = state.arrayholder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setState({
      ...state,
      data: newData,
      searchValue: text,
    });
  };

  const itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{backgroundColor: 'pink', marginVertical: 20, borderRadius: 20}}>
        <TouchableOpacity onPress={() => GetFlatListItem(item.name)}>
          <Text style={styles.row}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  const onSearchClosed = () => {
    setState({
      ...state,
      isSearchActive: false,
      searchValue: '',
    });
  };
  const onSearchTextChanged = (searchValue) => {
    searchData(searchValue);
  };
  const onSearchPressed = () => {
    setState({
      ...state,
      isSearchActive: true,
    });
  };
  return (
    <View style={styles.MainContainer}>
      <LiveSearch
        isSearchActive={state.isSearchActive}
        onSearchClosed={onSearchClosed}
        onSearchTextChanged={onSearchTextChanged}
        searchValue={state.searchValue}
        onSearchPressed={onSearchPressed}
      />
      <FlatList
        data={state.data}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
        style={{marginTop: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: '#FFFF',
  },
});

export default Index;
