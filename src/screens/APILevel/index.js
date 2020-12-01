import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function Index({navigation}) {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch('https://cms.islamicmindplus.com/api/levels', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setstate(result.result);
      });
  }, []);
  console.log('ini state', state);
  return (
    <>
      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Splash')}>
          <Text>Back To Splash</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        {state.map((elem) => {
          return (
            <View key={elem.id}>
              <Text style={styles.modalText}>{elem.nama}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  wrapperButton: {
    margin: 50,
    alignItems: 'flex-start',
  },
  modalText: {
    marginBottom: 15,
    color: 'red',
  },
});

export default Index;
