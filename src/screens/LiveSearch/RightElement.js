import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RightElement = (props) => {
  const {onSearchPress, onSearchClear, isSearchActive, searchValue} = props;
  if (isSearchActive && searchValue.length === 0) {
    return null;
  }
  return (
    <View>
      {isSearchActive && searchValue.length > 0 ? (
        <TouchableOpacity onPress={onSearchClear}>
          <Image
            source={require('./assets/xButton.png')}
            style={{
              resizeMode: 'contain',
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onSearchPress}>
          <Image
            source={require('./assets/search.png')}
            style={{
              resizeMode: 'contain',
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RightElement;
