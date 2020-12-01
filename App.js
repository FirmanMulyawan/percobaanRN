import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/Navigation/router';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="pink" barStyle="light-content" />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
};

export default App;
