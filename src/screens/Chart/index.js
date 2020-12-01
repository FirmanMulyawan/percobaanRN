import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

function Index(props) {
  return (
    <View>
      <Text>Chart</Text>
      <Text>SubmitfullNamessss: {props.SubmitfullName}</Text>
      <Text>SubmitAlamatRumah: {props.SubmitAlamatRumah}</Text>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    SubmitfullName: state.TestReducer.SubmitfullName,
    SubmitAlamatRumah: state.TestReducer.SubmitAlamatRumah,
  };
};
export default connect(mapStateToProps, null)(Index);
