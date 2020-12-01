import React, {Component} from 'react';
import {
  Animated,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Easing,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const backButton = require('./assets/backButton.png');
const search = require('./assets/search.png');
class LeftElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftElement: backButton,
      spinValue: new Animated.Value(0),
    };
    // this.navigation = useNavigation();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isSearchActive && !this.props.isSearchActive) {
      this.animate({toValue: 1, leftElement: search});
    }
    if (!nextProps.isSearchActive && this.props.isSearchActive) {
      this.animate({toValue: 0, leftElement: backButton});
    }
  }
  animate = ({toValue, leftElement}) => {
    Animated.timing(this.state.spinValue, {
      toValue: 0.5,
      duration: 112,
      easing: Easing.linear,
      useNativeDriver: Platform.OS === 'android',
    }).start(() => {
      this.setState({leftElement});
      Animated.timing(this.state.spinValue, {
        toValue,
        duration: 112,
        easing: Easing.linear,
        useNativeDriver: Platform.OS === 'android',
      }).start();
    });
  };
  render() {
    const {leftElement, spinValue} = this.state;
    const {isSearchActive, onSearchClose, onSearchGoBack} = this.props;

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View style={[styles.container, {transform: [{rotate: spin}]}]}>
        {isSearchActive ? (
          <TouchableOpacity onPress={onSearchClose}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 30,
                height: 30,
              }}
              source={leftElement}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onSearchGoBack}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 30,
                height: 30,
              }}
              source={leftElement}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
export default LeftElement;
