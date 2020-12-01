import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import SearchHeader from 'react-native-search-header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  },
  label: {
    fontSize: 20,
    marginVertical: 8,
    paddingVertical: 3,
    color: '#f5fcff',
  },
  button: {
    width: 130,
    height: 40,
    marginTop: 40,
    borderRadius: 2,
    backgroundColor: '#ff5722',
  },
});

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.label}> Demo </Text>
          <Button
            title="Search"
            color="black"
            onPress={() => this.searchHeader.show()}
          />
        </View>
        <SearchHeader
          ref={(searchHeader) => {
            this.searchHeader = searchHeader;
          }}
          onClear={() => {
            console.log('Clearing input!');
          }}
          onGetAutocompletions={async (text) => {
            if (text) {
              const response = await fetch(
                `http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`,
                {
                  method: 'get',
                },
              );
              const data = await response.json();
              return data[1];
            } else {
              return [];
            }
          }}
        />
        <View style={styles.button}>
          <Button
            title="Open Search"
            color="black"
            onPress={() => this.searchHeader.show()}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Clear"
            color="black"
            onPress={() => {
              this.searchHeader.clear();
            }}
          />
        </View>
      </View>
    );
  }
}
