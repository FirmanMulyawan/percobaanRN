import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Loading from './Loading';
export default function Index() {
  const loadingRef = React.useRef(undefined);
  const setShowLoading = (isVisible) => loadingRef.current.show(isVisible);
  return (
    <View>
      <Loading ref={loadingRef} />
    </View>
  );
}

const styles = StyleSheet.create({});
