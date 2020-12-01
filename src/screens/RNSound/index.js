import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Sound from 'react-native-sound';

const audioList = [
  {
    title: 'Play mp3 from localsss',
    isRequire: true,
    url: require('../../Assets/Sound/RinduAkuRinduKamu.mp3'),
  },
  {
    title: 'Play mp3 from URL',
    url: 'https://cms.islamicmindplus.com/sounds/surah/long/094/0941.mp3',
  },
];

let sound1, sound2;
const PlaySound = (item, index) => {
  if (index === 0) {
    sound1 = new Sound(item.url, (error, sound) => {
      if (error) {
        Alert.alert('error cinnnt' + error + message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
    });
  } else if (index === 1) {
    sound2 = new Sound(item.url, '', (error, sound) => {
      if (error) {
        Alert.alert('error' + error + message);
        return;
      }
      sound2.play(() => {
        sound2.release();
      });
    });
  }
};

const stopSound = (item, index) => {
  if (index === 0 && sound1) {
    sound1.stop(() => {
      console.log('stop Sound1');
    });
  } else if (index === 1 && sound2) {
    sound2.stop(() => {
      console.log('stop sound 2');
    });
  }
};
const Index = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>
          Example to play Music in react Native
        </Text>
        <ScrollView style={styles.container}>
          {audioList.map((item, index) => {
            return (
              <View style={styles.feature} key={item.title}>
                <Text style={{flex: 1, fontSize: 14}}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    return PlaySound(item, index);
                  }}>
                  <Text style={styles.buttonPlay}>play</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    return stopSound(item, index);
                  }}>
                  <Text style={styles.buttonStop}>Stop</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    paddingVertical: 20,
    textAlign: 'center',
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
  },
});
export default Index;
