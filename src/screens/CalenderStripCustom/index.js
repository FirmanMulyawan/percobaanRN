/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import 'moment/locale/en-au';
import CalendarStrip from './CustomCalenderStrip';

const Index = () => {
  const customDatesStylesFunc = (date) => {
    if (
      parseInt(date.format('YYYYMMDD')) ===
      parseInt(moment().format('YYYYMMDD'))
    ) {
      return {
        dateNumberStyle: {backgroundColor: 'green'},
      };
    } else if (
      parseInt(date.format('YYYYMMDD')) < parseInt(moment().format('YYYYMMDD'))
    ) {
      return {
        dateNumberStyle: {backgroundColor: 'lime'},
      };
    } else if (
      parseInt(date.format('YYYYMMDD')) > parseInt(moment().format('YYYYMMDD'))
    ) {
      return {
        dateNumberStyle: {backgroundColor: 'cyan'},
      };
    }
  };
  return (
    <View style={styles.Wrapper}>
      <CalendarStrip
        numDaysInWeek={5}
        scrollable={true}
        calendarHeaderStyle={{color: 'white'}}
        calendarHeaderContainerStyle={{
          backgroundColor: '#00BB40',
          paddingTop: 30,
          paddingBottom: 50,
        }}
        dateNumberStyle={{
          borderRadius: 10,
          paddingTop: 5,
          width: 55,
          height: 55,
          color: 'white',
          overflow: 'hidden',
          fontSize: 30,
        }}
        daySelectionAnimation={{
          type: 'background',
          duration: 300,
          borderHighlightColor: 'red',
          borderWidth: 1,
          highlightColor: 'transparent',
        }}
        calendarAnimation={{
          type: 'sequence',
        }}
        style={{
          height: 150,
        }}
        customDatesStyles={customDatesStylesFunc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    justifyContent: 'center',
  },
});

export default Index;
