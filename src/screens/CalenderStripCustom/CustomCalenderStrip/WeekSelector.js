import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from './CalenderStyle';

class WeekSelector extends Component {
  shouldComponentUpdate(nextProps) {
    let _nextProps = Object.assign({}, nextProps);
    let _props = Object.assign({}, this.props);
    delete _nextProps.iconComponent;
    delete _props.iconComponent;

    return (
      JSON.stringify(_props) !== JSON.stringify(_nextProps) ||
      this.props.iconComponent !== nextProps.iconComponent
    );
  }

  isEnabled(controlDate, weekStartDate, weekEndDate) {
    if (controlDate) {
      return !moment(controlDate).isBetween(
        weekStartDate,
        weekEndDate,
        'day',
        '[]',
      );
    }
    return true;
  }

  render() {
    const {
      controlDate,
      iconComponent,
      iconInstanceStyle,
      iconStyle,
      imageSource,
      onPress,
      weekEndDate,
      weekStartDate,
      size,
    } = this.props;

    const enabled = this.isEnabled(controlDate, weekStartDate, weekEndDate);
    const opacity = {opacity: enabled ? 1 : 0};

    let component;
    if (React.isValidElement(iconComponent)) {
      component = React.cloneElement(iconComponent, {
        style: [iconComponent.props.style, {opacity: opacity.opacity}],
      });
    } else if (Array.isArray(iconComponent)) {
      component = iconComponent;
    } else {
      let imageSize = {width: size, height: size};
      component = (
        <Image
          style={[
            styles.icon,
            imageSize,
            iconStyle,
            iconInstanceStyle,
            opacity,
          ]}
          source={imageSource}
        />
      );
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.iconContainer}
        onPress={onPress}
        disabled={!enabled}>
        {component}
      </TouchableOpacity>
    );
  }
}

export default WeekSelector;
