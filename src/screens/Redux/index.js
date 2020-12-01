/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  setAlamatRumah,
  setFullName,
  setSaveData,
} from '../../redux/actions/TesAction';
const Index = (props) => {
  const handleSave = () => {
    const data = {
      alamatRumah: props.AlamatRumah,
      fullName: props.FullName,
    };
    props.setSaveData(data);
  };
  return (
    <>
      <View style={styles.wrapperGlobal}>
        <View style={{marginBottom: 30}}>
          <Text>SubmitAlamatRumah:</Text>
          <Text>{props.SubmitAlamatRumah}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="alamat rumah"
            value={props.AlamatRumah}
            onChangeText={(value) => props.setAlamatRumah(value)}
          />
        </View>
        <View style={{marginBottom: 30}}>
          <Text>SubmitfullName:</Text>
          <Text>{props.SubmitfullName}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="full Name"
            value={props.FullName}
            onChangeText={(value) => props.setFullName(value)}
          />
        </View>
        <View style={{marginBottom: 30}}>
          <Button title="Press me" onPress={handleSave} />
        </View>
        <View>
          <Button
            title="Back Button"
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperGlobal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
  },
});

//untuk ambil state
const mapStateToProps = (state) => {
  return {
    AlamatRumah: state.TestReducer.alamatRumah,
    FullName: state.TestReducer.fullName,
    SubmitfullName: state.TestReducer.SubmitfullName,
    SubmitAlamatRumah: state.TestReducer.SubmitAlamatRumah,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setAlamatRumah,
      setFullName,
      setSaveData,
    },
    dispatch,
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
