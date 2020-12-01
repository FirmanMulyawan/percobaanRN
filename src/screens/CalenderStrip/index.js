import React from 'react';
import {View, Text} from 'react-native';

const Index = () => {
  return (
    <View>
      <Text>Hallo</Text>
    </View>
  );
};

export default Index;

// import React from 'react';
// import {StyleSheet, View, Alert} from 'react-native';
// import CalendarStrip from 'react-native-slideable-calendar-strip';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedDate: new Date(),
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <CalendarStrip
//           selectedDate={this.state.selectedDate}
//           onPressDate={(date) => {
//             this.setState({selectedDate: date});
//           }}
//           onPressGoToday={(today) => {
//             this.setState({selectedDate: today});
//           }}
//           onSwipeDown={() => {
//             Alert.alert('onSwipeDown');
//           }}
//           markedDate={['2020-11-07']}
//           weekStartsOn={1}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: '#fff',
//   },
// });
