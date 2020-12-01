/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const Example = () => (
  <View style={styles.container}>
    <CalendarStrip
      numDaysInWeek={5}
      scrollable
      showDayName={false}
      style={{
        height: 200,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'pink',
      }}
      calendarHeaderContainerStyle={{
        backgroundColor: 'red',
      }}
      calendarHeaderStyle={{
        color: 'white',
      }}
      dateNumberStyle={{
        color: 'white',
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Example;
