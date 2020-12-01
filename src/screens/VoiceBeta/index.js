import React, {useState, useEffect} from 'react';
import Voice from '@react-native-community/voice';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Index = () => {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const buttonLabel = isRecord ? 'Stop' : 'Start';
  const voiceLabel = text
    ? text
    : isRecord
    ? 'Say something...'
    : 'press Start button';

  const onSpeechStart = () => {
    setText('');
  };
  const onSpeechEnd = () => {
    // console.log('onSpeechEnd');
  };
  const onSpeechResults = (event) => {
    // console.log('onSpeechResults');
    setText(event.value[0]);
  };
  const onSpeechError = (event) => {
    // console.log('onSpeechError');
    console.log(event.error);
  };

  const onRecordVoice = () => {
    setIsRecord(true);
    Voice.start('id');
  };
  const onRecordVoiceOut = () => {
    setIsRecord(false);
    Voice.stop();
  };
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View
      style={[
        styles.Container,
        {backgroundColor: text === 'bengawan' ? 'red' : 'pink'},
      ]}>
      <Text style={styles.VoiceText}>{voiceLabel}</Text>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={onRecordVoice}
        onPressOut={onRecordVoiceOut}
        delayLongPress={300}
        style={[styles.button, {backgroundColor: isRecord ? 'blue' : 'grey'}]}>
        <Text style={styles.textButton}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  VoiceText: {
    margin: 32,
    color: 'white',
    fontSize: 30,
  },
  button: {
    margin: 20,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
});
export default Index;
