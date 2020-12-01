/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Platform, Keyboard, StyleSheet, TextInput} from 'react-native';
//
import {LgViewTextInput} from './LgViewTextInput';
import {Constant} from './constants';

const VtInputCode = ({
  setFocus = () => {},
  maxInput = 5,
  width = '60%',
  callback = () => {},
}) => {
  const [state, setState] = React.useState({
    text: [],
    textCode: '',
  });
  let TextInputCode = [];

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setFocus(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setFocus(false),
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const focusNext = (index, value) => {
    //
    if (index < TextInputCode.length - 1 && value) {
      TextInputCode[index + 1].focus();
    }

    if (index === TextInputCode.length - 1) {
      TextInputCode[index].blur();
    }
    //
    const {text} = state;
    text[index] = value;
    setState({
      ...state,
      text,
    });
    //
    if (text.length >= maxInput) {
      setKeCallback();
    }
  };

  const focusPrevious = (key, index) => {
    if (key === 'Backspace' && index !== 0) {
      TextInputCode[index - 1].focus();
    }
  };

  const setKeCallback = () => {
    let textCode = '';
    state.text.map((value, index) => {
      if (value !== '') {
        textCode += value;
      }
    });

    if (textCode.length >= maxInput) {
      callback(textCode);
    }
  };
  //
  var elements = [];

  for (let index = 0; index < maxInput; index++) {
    elements.push(
      <LgViewTextInput key={index} style={[Style.container, Style.SsShadow]}>
        <TextInput
          ref={(ref) => (TextInputCode[index] = ref)}
          maxLength={1}
          keyboardType="number-pad"
          style={Style.textInput}
          onChangeText={(v) => focusNext(index, v)}
          onKeyPress={(e) => focusPrevious(e.nativeEvent.key, index)}
        />
      </LgViewTextInput>,
    );
  }
  //
  return (
    <View
      style={[
        {
          justifyContent:
            width <= '60%' || width < 300 ? 'space-evenly' : 'space-between',
          width: width,
        },
        Style.conatinerParent,
      ]}>
      {elements}
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    height: '100%',
  },
  textInput: {
    fontSize: Platform.select({
      android: 20,
      ios: 20,
    }),
    color: Constant.warnaShadow,
    height: Platform.select({
      ios: '100%',
      android: '100%',
    }),
    width: Platform.select({
      ios: 35,
    }),
    textAlign: 'center',
  },
  conatinerParent: {
    height: 45,
    marginTop: 10,
    flexDirection: 'row',
  },
  SsShadow: {
    elevation: 1.7,
  },
});

export {VtInputCode};
