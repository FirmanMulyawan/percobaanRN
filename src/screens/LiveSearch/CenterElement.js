import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  TextInput,
} from 'react-native';

class CenterElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: props.isSearchActive,
      opacityValue: new Animated.Value(1),
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.isSearchActive !== nextProps.isSearchActive) {
      this.animateElements(nextProps.isSearchActive);
    }
  }
  animateElements = (nextIsSearchActive) => {
    Animated.timing(this.state.opacityValue, {
      toValue: 0,
      duration: 112,
      easing: Easing.linear,
      useNativeDriver: Platform.OS === 'android',
    }).start(() => {
      this.setState({
        textInput: nextIsSearchActive,
      });

      Animated.timing(this.state.opacityValue, {
        toValue: 1,
        duration: 112,
        easing: Easing.linear,
        useNativeDriver: Platform.OS === 'android',
      }).start();
    });
  };
  render() {
    const {title, onSearchTextChange, searchValue, isSearchActive} = this.props;
    const {opacityValue, textInput} = this.state;

    let content = (
      <View style={{alignItems: 'center'}}>
        <Text
          style={[styles.text, {color: isSearchActive ? 'green' : 'white'}]}>
          {title}
        </Text>
      </View>
    );

    if (textInput) {
      content = (
        <View style={{left: -20}}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            value={searchValue}
            onChangeText={(text) => onSearchTextChange(text)}
          />
        </View>
      );
    }
    return (
      <Animated.View style={[styles.container, {opacity: opacityValue}]}>
        {content}
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
  },
  textInput: {
    fontWeight: '500',
    fontSize: 20,
    color: 'red',
    paddingLeft: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
  },
});
export default CenterElement;
