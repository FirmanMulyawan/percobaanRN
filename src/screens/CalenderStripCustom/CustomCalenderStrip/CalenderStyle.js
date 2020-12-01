import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: 'hidden',
  },
  datesStrip: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -50,
  },
  calendarDates: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },

  //CALENDAR DAY
  dateRootContainer: {
    flex: 1,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateNumber: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weekendDateNumber: {
    color: '#A7A7A7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
