/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import TabMenu from './TabMenu';
import Img from '../../Constant/Img';
const Index = ({route}) => {
  return (
    <>
      <View style={styles.Header}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.textTitle}>Quran dan Terjemahan</Text>
        </View>
      </View>
      <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
        <TabMenu route={route} />
        <View style={styles.btnWrapperWhite}>
          <View
            style={{
              padding: 25,
              marginHorizontal: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={styles.wrapperButtonImg}
              activeOpacity={0.6}>
              <Image
                source={Img.QuranPage.DoublePreviousCerah}
                style={styles.buttonImg}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={Img.QuranPage.Play} style={styles.play} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperButtonImg}
              activeOpacity={0.6}>
              <Image
                source={Img.QuranPage.doubleNextCerah}
                style={styles.buttonImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'pink',
    height: 100,
  },
  wrapperTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  btnWrapperWhite: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#FFD400',
  },
});

export default Index;
