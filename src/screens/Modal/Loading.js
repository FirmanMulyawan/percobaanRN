/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator} from 'react-native';

import Modal from './ModalDasar';

const Loading = React.forwardRef(({}, ref) => {
  const onHide = React.useRef(undefined);

  const [isVisible, setIsVisible] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    show: setIsVisible,
    onHide: (func) => (onHide.current = func),
  }));

  return (
    <Modal
      swipeDirection={[]}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isVisible}
      style={{backgroundColor: 'transparent'}}
      onModalHide={onHide.current}
      coverScreen={false}>
      <ActivityIndicator color="#fff" size="large" />
    </Modal>
  );
});

export default Loading;
