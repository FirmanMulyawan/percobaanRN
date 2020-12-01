import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Easing,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import styles from './CalenderStyle';

class CalendarDay extends Component {
  static defaultProps = {
    daySelectionAnimation: {
      type: '',
      duration: 10,
      borderWidth: 1,
      borderHighlightColor: 'black',
      highlightColor: 'yellow',
      animType: LayoutAnimation.Types.easeInEaseOut,
      animUpdateType: LayoutAnimation.Types.easeInEaseOut,
      animProperty: LayoutAnimation.Properties.opacity,
      animSpringDamping: undefined,
    },
    styleWeekend: true,
    showDayNumber: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      enabled: this.isDateAllowed(
        props.date,
        props.datesBlacklist,
        props.datesWhitelist,
      ),
      selected: this.isDateSelected(props.date, props.selectedDate),
      customStyle: this.getCustomDateStyle(props.date, props.customDatesStyles),
      animatedValue: new Animated.Value(0),
      ...this.calcSizes(props),
    };

    if (!props.scrollable) {
      props.registerAnimation(this.createAnimation());
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let newState = {};
    let doStateUpdate = false;
    let hasDateChanged = prevProps.date !== this.props.date;

    if (this.props.selectedDate !== prevProps.selectedDate || hasDateChanged) {
      if (
        this.props.daySelectionAnimation.type !== '' &&
        !this.props.scrollable
      ) {
        let configurableAnimation = {
          duration: this.props.daySelectionAnimation.duration || 300,
          create: {
            type:
              this.props.daySelectionAnimation.animType ||
              LayoutAnimation.Types.easeInEaseOut,
            property:
              this.props.daySelectionAnimation.animProperty ||
              LayoutAnimation.Properties.opacity,
          },
          update: {
            type:
              this.props.daySelectionAnimation.animUpdateType ||
              LayoutAnimation.Types.easeInEaseOut,
            springDamping: this.props.daySelectionAnimation.animSpringDamping,
          },
          delete: {
            type:
              this.props.daySelectionAnimation.animType ||
              LayoutAnimation.Types.easeInEaseOut,
            property:
              this.props.daySelectionAnimation.animProperty ||
              LayoutAnimation.Properties.opacity,
          },
        };
        LayoutAnimation.configureNext(configurableAnimation);
      }
      newState.selected = this.isDateSelected(
        this.props.date,
        this.props.selectedDate,
      );
      doStateUpdate = true;
    }

    if (prevProps.size !== this.props.size) {
      newState = {...newState, ...this.calcSizes(this.props)};
      doStateUpdate = true;
    }

    if (
      prevProps.customDatesStyles !== this.props.customDatesStyles ||
      hasDateChanged
    ) {
      newState = {
        ...newState,
        customStyle: this.getCustomDateStyle(
          this.props.date,
          this.props.customDatesStyles,
        ),
      };
      doStateUpdate = true;
    }
    if (
      prevProps.datesBlacklist !== this.props.datesBlacklist ||
      prevProps.datesWhitelist !== this.props.datesWhitelist ||
      hasDateChanged
    ) {
      newState = {
        ...newState,
        enabled: this.isDateAllowed(
          this.props.date,
          this.props.datesBlacklist,
          this.props.datesWhitelist,
        ),
      };
      doStateUpdate = true;
    }

    if (doStateUpdate) {
      this.setState(newState);
    }
  }

  calcSizes = (props) => {
    return {
      containerSize: Math.round(props.size),
      containerBorderRadius: Math.round(props.size / 2),
      dateNumberFontSize: Math.round(props.size / 2.9),
    };
  };

  //Function to check if provided date is the same as selected one, hence date is selected
  //using isSame moment query with "day" param so that it check years, months and day
  isDateSelected = (date, selectedDate) => {
    if (!date || !selectedDate) {
      return date === selectedDate;
    }
    return date.isSame(selectedDate, 'day');
  };

  // Check whether date is allowed
  isDateAllowed = (date, datesBlacklist, datesWhitelist) => {
    // datesBlacklist entries override datesWhitelist
    if (Array.isArray(datesBlacklist)) {
      for (let disallowed of datesBlacklist) {
        // Blacklist start/end object
        if (disallowed.start && disallowed.end) {
          if (date.isBetween(disallowed.start, disallowed.end, 'day', '[]')) {
            return false;
          }
        } else {
          if (date.isSame(disallowed, 'day')) {
            return false;
          }
        }
      }
    } else if (datesBlacklist instanceof Function) {
      return !datesBlacklist(date);
    }

    // Whitelist
    if (Array.isArray(datesWhitelist)) {
      for (let allowed of datesWhitelist) {
        // start/end object
        if (allowed.start && allowed.end) {
          if (date.isBetween(allowed.start, allowed.end, 'day', '[]')) {
            return true;
          }
        } else {
          if (date.isSame(allowed, 'day')) {
            return true;
          }
        }
      }
      return false;
    } else if (datesWhitelist instanceof Function) {
      return datesWhitelist(date);
    }

    return true;
  };

  getCustomDateStyle = (date, customDatesStyles) => {
    if (Array.isArray(customDatesStyles)) {
      for (let customDateStyle of customDatesStyles) {
        if (customDateStyle.endDate) {
          // Range
          if (
            date.isBetween(
              customDateStyle.startDate,
              customDateStyle.endDate,
              'day',
              '[]',
            )
          ) {
            return customDateStyle;
          }
        } else {
          // Single date
          if (date.isSame(customDateStyle.startDate, 'day')) {
            return customDateStyle;
          }
        }
      }
    } else if (customDatesStyles instanceof Function) {
      return customDatesStyles(date);
    }
  };

  createAnimation = () => {
    const {calendarAnimation, useNativeDriver} = this.props;
    if (calendarAnimation) {
      this.animation = Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: calendarAnimation.duration,
        easing: Easing.linear,
        useNativeDriver,
      });

      // Individual CalendarDay animation starts have unpredictable timing
      // when used with delays in RN Animated.
      // Send animation to parent to collect and start together.
      return this.animation;
    }
  };

  render() {
    // Defaults for disabled state
    const {
      date,
      dateNumberStyle,
      disabledDateNumberStyle,
      disabledDateOpacity,
      calendarAnimation,
      daySelectionAnimation,
      highlightDateNumberStyle,
      styleWeekend,
      weekendDateNumberStyle,
      onDateSelected,
      showDayNumber,
      allowDayTextScaling,
      dayComponent: DayComponent,
      scrollable,
    } = this.props;
    const {
      enabled,
      selected,
      containerSize,
      containerBorderRadius,
      customStyle,
      dateNumberFontSize,
    } = this.state;

    let _dateNumberStyle = [
      styles.dateNumber,
      enabled ? dateNumberStyle : disabledDateNumberStyle,
    ];
    let _dateViewStyle = enabled
      ? [{backgroundColor: 'transparent'}]
      : [{opacity: disabledDateOpacity}];

    if (customStyle) {
      _dateNumberStyle.push(customStyle.dateNumberStyle);
      _dateViewStyle.push(customStyle.dateContainerStyle);
    }
    if (enabled && selected) {
      // Enabled state
      //The user can disable animation, so that is why I use selection type
      //If it is background, the user have to input colors for animation
      //If it is border, the user has to input color for border animation
      switch (daySelectionAnimation.type) {
        case 'background':
          _dateViewStyle.push({
            backgroundColor: daySelectionAnimation.highlightColor,
            borderWidth: daySelectionAnimation.borderWidth,
            borderColor: daySelectionAnimation.borderHighlightColor,
          });
          break;
        default:
          break;
      }

      _dateNumberStyle = [styles.dateNumber, dateNumberStyle];
      if (
        styleWeekend &&
        (date.isoWeekday() === 6 || date.isoWeekday() === 7)
      ) {
        _dateNumberStyle = [styles.weekendDateNumber, weekendDateNumberStyle];
      }
      if (selected) {
        _dateNumberStyle = [styles.dateNumber, highlightDateNumberStyle];
      }
    }

    let responsiveDateContainerStyle = {
      width: containerSize,
      height: containerSize,
      borderRadius: containerBorderRadius,
    };

    let day;
    if (DayComponent) {
      day = <DayComponent {...this.props} {...this.state} />;
    } else {
      day = (
        <TouchableOpacity
          onPress={onDateSelected.bind(this, date)}
          disabled={!enabled}>
          <View
            style={[
              styles.dateContainer,
              responsiveDateContainerStyle,
              _dateViewStyle,
            ]}>
            {showDayNumber && (
              <View>
                <Text
                  style={[{fontSize: dateNumberFontSize}, _dateNumberStyle]}
                  allowFontScaling={allowDayTextScaling}>
                  {date.date()}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    }

    return calendarAnimation && !scrollable ? (
      <Animated.View
        style={[styles.dateRootContainer, {opacity: this.state.animatedValue}]}>
        {day}
      </Animated.View>
    ) : (
      <View style={styles.dateRootContainer}>{day}</View>
    );
  }
}

export default CalendarDay;
