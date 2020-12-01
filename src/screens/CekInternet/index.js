/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import NetInfo from '@react-native-community/netinfo';

const Index = () => {
  const [isConnected, setState] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleConnectivityChange = (isConnectedNT) => {
    setState(isConnectedNT);
  };
  useEffect(() => {
    if (isConnected === false) {
      setModalVisible(true);
    }
    NetInfo.addEventListener((state) => {
      handleConnectivityChange(state.isConnected);
    });
  }, [isConnected]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hallo</Text>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Index;

// /* eslint-disable no-alert */
// import React, {useState, useEffect} from 'react';
// import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
// import NetInfo from '@react-native-community/netinfo';

// const Index = () => {
//   const [netInfo, setNetInfo] = useState('');
//   useEffect(() => {
//     // Subscribe to network state updates
//     const unsubscribe = NetInfo.addEventListener((state) => {
//       setNetInfo(
//         `Connection typess: ${state.type}
//           Is connected?: ${state.isConnected}
//           IP Address: ${state.details.ipAddress}`,
//       );
//     });
//     return () => {
//       // Unsubscribe to network state updates
//       unsubscribe();
//     };
//   }, []);

//   const Internet = NetInfo.fetch('wifi').then((state) => {
//     console.log('SSID', state.details.ssid);
//     console.log('BSSID', state.details.bssid);
//     console.log('Is connected?', state.isConnected);
//   });
//   console.log('internet');
//   const getNetInfo = () => {
//     // To get the network state once
//     NetInfo.fetch().then((state) => {
//       alert(
//         `Connection type: ${state.type}
//         Is connected?: ${state.isConnected}
//         IP Address: ${state.details.ipAddress}`,
//       );
//     });
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.header}>
//           React Native NetInfo
//           {'\n'}
//           To Get NetInfo information
//         </Text>
//         <Text style={styles.textStyle}>
//           {/*Here is NetInfo to get device type*/}
//           {netInfo}
//         </Text>
//         <Button title="Get more detailed NetInfo" onPress={getNetInfo} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: 'black',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     marginTop: 30,
//     fontSize: 16,
//     textAlign: 'center',
//     color: 'red',
//     paddingVertical: 20,
//   },
// });

// export default Index;

// import React from 'react';
// import {View, Text} from 'react-native';
// import {useNetInfo} from '@react-native-community/netinfo';

// const YourComponent = () => {
//   const netInfo = useNetInfo();
//   //   const unsubscribe = NetInfo.addEventListener((state) => {
//   //     console.log('Connection type', state.type);
//   //     console.log('Is connected?', state.isConnected);
//   //   });

//   // Unsubscribe
//   //   unsubscribe();
//   return (
//     <View>
//       <Text>Type: {netInfo.type}</Text>
//       <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
//     </View>
//   );
// };

// export default YourComponent;
