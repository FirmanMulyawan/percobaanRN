import React, { useCallback } from 'react';
import {StyleSheet, View} from 'react-native';
import LeftElement from './LeftElement';
import CenterElement from './CenterElement';
import RightElement from './RightElement';
import {useNavigation} from '@react-navigation/native';
const Toolbar = ({
  isSearchActive,
  onSearchClosed,
  onSearchTextChanged,
  searchValue,
  onSearchPressed,
}) => {
  const navigation = useNavigation();
  const onSearchGoBacked = () => {
    navigation.goBack();
  };
  const onSearchClearPressed = () => {
    onSearchTextChanged('');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.toolbarContainer}>
          <LeftElement
            isSearchActive={isSearchActive}
            onSearchClose={onSearchClosed}
            onSearchGoBack={onSearchGoBacked}
          />
          <CenterElement
            title="Animation"
            isSearchActive={isSearchActive}
            onSearchTextChange={onSearchTextChanged}
            searchValue={searchValue}
          />
          <RightElement
            isSearchActive={isSearchActive}
            onSearchPress={onSearchPressed}
            searchValue={searchValue}
            onSearchClear={onSearchClearPressed}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#c4d585',
    elevation: 4,
  },
  statusBar: {
    height: 24,
  },
  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    height: 56,
    flex: 1,
  },
});
export default Toolbar;
