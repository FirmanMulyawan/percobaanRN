import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InfiniteScroll from 'react-native-infinite-looping-scroll';
// import InfiniteScroll from './InfinitifeLoop';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hallo</Text>
        <View style={{height: 500, overflow: 'hidden'}}>
          <InfiniteScroll
            data={[{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}]}
            renderItem={({item, index}) => {
              return (
                <View style={styles.listItem} key={index + Math.random}>
                  <Text style={styles.text}>{item.key}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderColor: '#0099A8',
    borderWidth: 10,
    backgroundColor: '#FEFEFE',
  },
  text: {
    color: '#0099A8',
    fontSize: 32,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
