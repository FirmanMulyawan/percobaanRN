/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';

class MyAppText extends React.Component {
  render() {
    return <Text>Ini contoh children</Text>;
  }
}

function Index({navigation}, props) {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={{alignItems: 'center'}}>
        <Text>Splash</Text>
      </View>
      <MyAppText>{props.children}</MyAppText>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <View style={styles.button}>
          <Button
            title="Drop Down"
            onPress={() => navigation.navigate('DropDown')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="CalenderStrip"
            onPress={() => navigation.navigate('CalenderStrip')}
            pageX={30}
          />
        </View>
        <View style={styles.button}>
          <Button title="Video" onPress={() => navigation.navigate('Video')} />
        </View>
        <View style={styles.button}>
          <Button
            title="Status Bar"
            onPress={() => navigation.navigate('GetAPI')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="ActivityIndicator"
            onPress={() => navigation.navigate('Loading')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Refresh Control"
            onPress={() => navigation.navigate('RefreshControl')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Percobaan State"
            onPress={() => navigation.navigate('CobaState')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="TextInput"
            onPress={() => navigation.navigate('TextInput')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Layout"
            onPress={() => navigation.navigate('Layout')}
          />
        </View>
        <View style={styles.button}>
          <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
        </View>
        <View style={styles.button}>
          <Button
            title="Pressable"
            onPress={() => navigation.navigate('Pressable')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Animated"
            onPress={() => navigation.navigate('Animated')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Drag N Drop"
            onPress={() => navigation.navigate('DragNDrop')}
          />
        </View>
        <View style={styles.button}>
          <Button title="API" onPress={() => navigation.navigate('API')} />
        </View>
        <View style={styles.button}>
          <Button
            title="API DUMMY"
            onPress={() => navigation.navigate('APIDummy')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="API AXIOS"
            onPress={() => navigation.navigate('APIAXIOS')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Local API"
            onPress={() => navigation.navigate('LocalAPI')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Real API"
            onPress={() => navigation.navigate('RealAPI')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="API Level"
            onPress={() => navigation.navigate('APILevel')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="API Loading"
            onPress={() => navigation.navigate('APILoading')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="API Refresh"
            onPress={() => navigation.navigate('APIRefresh')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Al-Quran"
            onPress={() => navigation.navigate('GetSurah')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="AsyncStorage"
            onPress={() => navigation.navigate('AsyncStorage')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Carousel"
            onPress={() => navigation.navigate('Carousel')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="CarouselDevTo"
            onPress={() => navigation.navigate('CarouselDevTo')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="LiveSearch"
            onPress={() => navigation.navigate('LiveSearch')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="LiveSearchFreeCode"
            onPress={() => navigation.navigate('LiveSearchFreeCode')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="SearchHeader"
            onPress={() => navigation.navigate('SearchHeader')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="SearchFacebook"
            onPress={() => navigation.navigate('SearchFacebook')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="PasscodeTextInput"
            onPress={() => navigation.navigate('PasscodeTextInput')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="DropDownBianglala"
            onPress={() => navigation.navigate('DropDownBianglala')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="DragNDropDualingo"
            onPress={() => navigation.navigate('DragNDropDualingo')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="InfiniteLoop"
            onPress={() => navigation.navigate('InfiniteLoop')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="CekInternet"
            onPress={() => navigation.navigate('CekInternet')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="ProgresCircle"
            onPress={() => navigation.navigate('ProgresCircle')}
          />
        </View>
        <View style={styles.button}>
          <Button title="Chart" onPress={() => navigation.navigate('Chart')} />
        </View>
        <View style={styles.button}>
          <Button
            title="DoubleCarousel"
            onPress={() => navigation.navigate('DoubleCarousel')}
          />
        </View>
        <View style={styles.button}>
          <Button title="Redux" onPress={() => navigation.navigate('Redux')} />
        </View>
        <View style={styles.button}>
          <Button
            title="CalenderBugiDev"
            onPress={() => navigation.navigate('CalenderBugiDev')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="CalenderStripCustom"
            onPress={() => navigation.navigate('CalenderStripCustom')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="CobaSound"
            onPress={() => navigation.navigate('CobaSound')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="RNSound"
            onPress={() => navigation.navigate('RNSound')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="SnapCarousel"
            onPress={() => navigation.navigate('SnapCarousel')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="SearchFlatlist"
            onPress={() => navigation.navigate('SearchFlatlist')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="SpeechRecognition"
            onPress={() => navigation.navigate('SpeechRecognition')}
          />
        </View>
        <View style={[styles.button, {marginBottom: 100}]}>
          <Button
            title="VoiceBeta"
            onPress={() => navigation.navigate('VoiceBeta')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
  },
  button: {
    marginTop: 30,
    width: 150,
  },
});
export default Index;
