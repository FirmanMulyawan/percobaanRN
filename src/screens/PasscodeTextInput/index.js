/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  // View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
//
// import {VtContainer} from './vtData';
import {VtInputCode} from './vtInput';
// import {ModalLoading} from './ModalLoading';
// import {ModalAlert} from './ModalAlert';
//
const {width} = Dimensions.get('window');

const VerificationScreen = () => {
  const [state, setState] = React.useState({
    inputFocus: false,
    maxInput: 4,
    alertSuccessVisible: false,
    alertSuccess: false,
    alertSuccessText: '',
    isLoading: false,
  });

  // state = {
  //   inputFocus: false,
  //   maxInput: 4,
  //   alertSuccessVisible: false,
  //   alertSuccess: false,
  //   alertSuccessText: '',
  //   isLoading: false,
  // };

  const verificationCheck = (value = '') => {
    const {maxInput} = state;
    if (value.length >= maxInput) {
      setState({
        ...state,
        isLoading: true,
      });
      setTimeout(() => {
        setState({
          ...state,
          isLoading: false,
        });
      }, 2000);
    }
  };

  // alertShow = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       alertSuccessVisible: true,
  //       alertSuccessText:
  //         'Gagal melakukan verifikasi nomor handphone dan email!',
  //     });
  //   }, 500);
  // };

  const {
    // inputFocus,
    maxInput,
    // alertSuccessVisible,
    // alertSuccess,
    // alertSuccessText,
    // isLoading,
  } = state;
  //
  // const Content = (
  //   <VtContainer
  //     style={[
  //       styles.contentContainer,
  //       {
  //         flex: inputFocus
  //           ? Platform.select({
  //               ios: width > 405 ? 2 : 1.5,
  //               android: 0.8,
  //             })
  //           : 1,
  //       },
  //     ]}
  //   />
  // );
  //
  const Footer = (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: Platform.select({
          android: 10,
          ios: width > 405 ? 10 : 5,
        }),
      }}>
      {/* <VtContainer style={[styles.containerTextCode, styles.SsShadow]}> */}
      <VtInputCode
        setFocus={(e) =>
          setState({
            ...state,
            inputFocus: e,
          })
        }
        maxInput={maxInput}
        width="100%"
        callback={(value) => verificationCheck(value)}
      />
      {/* </VtContainer> */}
    </SafeAreaView>
  );
  //
  // const AlertModal = (
  //   <View>
  //     <ModalLoading isLoading={isLoading} />
  //     <ModalAlert
  //       alertSuccess={alertSuccess}
  //       isVisible={alertSuccessVisible}
  //       alertText={alertSuccessText}
  //       callback={() => {
  //         this.setState({
  //           alertSuccessVisible: false,
  //         });
  //       }}
  //     />
  //   </View>
  // );
  return (
    // <VtContainer>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{
        width: '100%',
        height: '100%',
      }}
      enabled={Platform.select({
        android: true,
        ios: true,
      })}>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'pink',
        }}
        activeOpacity={1}>
        {/* {Content} */}
        {Footer}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

// const styles = StyleSheet.create({
//   contentContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 20,
//   },
//   SsShadow: {
//     elevation: 1.7,
//   },
//   containerTextCode: {
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: Platform.select({
//       ios: width > 405 ? '70%' : '85%',
//       android: '70%',
//     }),
//     height: Platform.select({
//       android: 135,
//       ios: 156,
//     }),
//     borderRadius: 10,
//   },
// });

export default VerificationScreen;

/* eslint-disable react-native/no-inline-styles */
// import React, {Component} from 'react';
// import {
//   // View,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   SafeAreaView,
//   Keyboard,
//   Platform,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';
//
// import {VtContainer} from './vtData';
// import {VtInputCode} from './vtInput';
// import {ModalLoading} from './ModalLoading';
// import {ModalAlert} from './ModalAlert';
//
// const {width} = Dimensions.get('window');

// class VerificationScreen extends Component {
//   constructor(props) {
//     super(props);
//   }

//   state = {
//     inputFocus: false,
//     maxInput: 4,
//     alertSuccessVisible: false,
//     alertSuccess: false,
//     alertSuccessText: '',
//     isLoading: false,
//   };

// verificationCheck = (value = '') => {
//   const {maxInput} = this.state;
//   if (value.length >= maxInput) {
//     this.setState({
//       isLoading: true,
//     });
//     setTimeout(() => {
//       this.setState({
//         isLoading: false,
//       });
//       // this.alertShow();
//     }, 2000);
//   }
// };

// alertShow = () => {
//   setTimeout(() => {
//     this.setState({
//       alertSuccessVisible: true,
//       alertSuccessText:
//         'Gagal melakukan verifikasi nomor handphone dan email!',
//     });
//   }, 500);
// };

// render() {
//   const {
// inputFocus,
// maxInput,
// alertSuccessVisible,
// alertSuccess,
// alertSuccessText,
// isLoading,
// } = this.state;
//
// const Content = (
//   <VtContainer
//     style={[
//       styles.contentContainer,
//       {
//         flex: inputFocus
//           ? Platform.select({
//               ios: width > 405 ? 2 : 1.5,
//               android: 0.8,
//             })
//           : 1,
//       },
//     ]}
//   />
// );
//
// const Footer = (
//   <SafeAreaView
//     style={{
//       flex: 1,
//       justifyContent: 'space-between',
//       paddingVertical: Platform.select({
//         android: 10,
//         ios: width > 405 ? 10 : 5,
//       }),
//     }}>
{
  /* <VtContainer style={[styles.containerTextCode, styles.SsShadow]}> */
}
{
  /* <VtInputCode
          setFocus={(e) =>
            this.setState({
              inputFocus: e,
            })
          }
          maxInput={maxInput}
          width="100%"
          callback={(value) => this.verificationCheck(value)}
        /> */
}
{
  /* </VtContainer> */
}
// </SafeAreaView>
// );
//
// const AlertModal = (
//   <View>
//     <ModalLoading isLoading={isLoading} />
//     <ModalAlert
//       alertSuccess={alertSuccess}
//       isVisible={alertSuccessVisible}
//       alertText={alertSuccessText}
//       callback={() => {
//         this.setState({
//           alertSuccessVisible: false,
//         });
//       }}
//     />
//   </View>
// );
// return (
// <VtContainer>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : null}
//         style={{
//           width: '100%',
//           height: '100%',
//         }}
//         enabled={Platform.select({
//           android: true,
//           ios: true,
//         })}>
//         <TouchableOpacity
//           onPress={() => {
//             Keyboard.dismiss();
//           }}
//           style={{
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'pink',
//           }}
//           activeOpacity={1}>
//           {/* {Content} */}
//           {Footer}
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contentContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 20,
//   },
//   SsShadow: {
//     elevation: 1.7,
//   },
//   containerTextCode: {
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: Platform.select({
//       ios: width > 405 ? '70%' : '85%',
//       android: '70%',
//     }),
//     height: Platform.select({
//       android: 135,
//       ios: 156,
//     }),
//     borderRadius: 10,
//   },
// });

// export default VerificationScreen;
