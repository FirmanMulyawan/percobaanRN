/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import BaseModal from 'react-native-modal';
import Axios from 'axios';

const Index = () => {
  const [dropVisible, setDropVisible] = useState(false);
  const [language, setLanguage] = useState([]);
  const [tempat, setTempat] = useState([]);
  const handleClick = () => {
    Axios.get('http://cms.islamicmindplus.com/api/languages').then((result) => {
      //   console.log('Language nya', result.data.result);
      setLanguage(result.data.result);
      setDropVisible(true);
    });
  };

  const Gangan = React.useCallback(
    (ref) => {
      if (ref) {
        ref.measure((fx, fy, width, height, px, py) => {
          const newPosition = {px, py};
          // console.log(px, py);
          setTempat(newPosition);
        });
      }
    },
    [dropVisible],
  );

  console.log(tempat);
  return (
    <>
      <View style={{marginTop: 200, marginBottom: 30}}>
        <Text>Papap</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 150}} />
        <View collapsable={false} ref={Gangan}>
          <TouchableOpacity onPress={handleClick} style={styles.wrapper}>
            <Text style={styles.button}>Button</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <BaseModal
          backdropOpacity={0.1}
          isVisible={dropVisible}
          deviceHeight={Dimensions.get('window').height}
          style={{
            top: tempat.py - 20,
            left: tempat.px - 20,
            position: 'absolute',
          }}
          animationType={'fade'}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {language.map((lang) => {
                return (
                  <View key={lang.id}>
                    <Text style={styles.modalText}>{lang.nama}</Text>
                  </View>
                );
              })}
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setDropVisible(!dropVisible);
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </BaseModal>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    // marginTop: 100,
    // marginLeft: 50,
    backgroundColor: 'pink',
    width: 50,
    height: 70,
  },
  button: {
    textAlign: 'center',
  },
  centeredView: {
    width: 200,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Index;
