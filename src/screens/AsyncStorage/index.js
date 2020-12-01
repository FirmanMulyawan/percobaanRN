import React from 'react';
import {View, Text} from 'react-native';

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
    </View>
  );
};

export default Index;

// import React, {useState, useEffect} from 'react';
// import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
// // import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// export default function App() {
//   const [state, setState] = useState({
//     name: '',
//     hobby: '',
//     textName: '',
//     textHobby: '',
//   });

//   useEffect(() => {
//     AsyncStorage.getItem('user', (error, result) => {
//       console.log('ini result', result);
//       if (result) {
//         let resultParsed = JSON.parse(result);
//         setState({
//           ...state,
//           name: resultParsed.name,
//           hobby: resultParsed.hobby,
//         });
//       }
//     });
//   }, []);

//   const saveData = () => {
//     let name = state.textName;
//     let hobby = state.textHobby;
//     let data = {
//       name: name,
//       hobby: hobby,
//     };
//     AsyncStorage.setItem('user', JSON.stringify(data));
//     setState({
//       ...state,
//       name: name,
//       hobby: hobby,
//     });
//     Alert.alert('Data tersimpan');
//   };

//   const removeItemValue = async () => {
//     try {
//       // Mengahpus data kdari local storage
//       await AsyncStorage.removeItem('user');
//       Alert.alert('Berhasil Menghapus Data');
//       setState({
//         ...state,
//         name: '',
//         hobby: '',
//       });
//     } catch (exception) {
//       console.log(exception);
//       Alert.alert('Gagal Menghapus Data');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Halo! Kenalan yuk!</Text>
//       <Text style={styles.instructions}>
//         Nama: {state.name}
//         {'\n'}
//         {'\n'}
//         Hobi: {state.hobby}
//       </Text>
//       <TextInput
//         style={styles.textInput}
//         onChangeText={(textName) =>
//           setState({
//             ...state,
//             textName: textName,
//           })
//         }
//         placeholder="Nama"
//       />
//       <TextInput
//         style={styles.textInput}
//         onChangeText={(textHobby) =>
//           setState({
//             ...state,
//             textHobby: textHobby,
//           })
//         }
//         placeholder="Hobi"
//       />
//       <Button title="Simpan" onPress={saveData} />
//       <Text />
//       <Button title="Hapus Storage" onPress={removeItemValue} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     padding: 16,
//     paddingTop: 32,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   textInput: {
//     height: 35,
//     backgroundColor: 'white',
//     marginTop: 8,
//     marginBottom: 8,
//     borderWidth: 1,
//     borderColor: 'grey',
//     padding: 8,
//   },
// });
