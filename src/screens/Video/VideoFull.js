import React from 'react';
import {StatusBar} from 'react-native';
import Modal from './ModalVideo';
import styles from './styles';
import VideoPlayer from './VideoAdit';

const VideoFull = ({isVisible, minute, onRequestClose, source}) => {
  const [currentSec, setCurrentSec] = React.useState(minute);
  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={() => onRequestClose(currentSec)}
      style={[styles.video, styles.videoFull]}
      swipeDirection={['down']}
      useNativeDriver={true}>
      <StatusBar animated hidden />
      <VideoPlayer
        fullscreen={true}
        source={source}
        onFullClose={() => onRequestClose(currentSec)}
        onFullProgress={(time) => setCurrentSec(time)}
      />
    </Modal>
  );
};

export default VideoFull;
