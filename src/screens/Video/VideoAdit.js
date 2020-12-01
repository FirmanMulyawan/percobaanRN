import React from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import VideoBase from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import VideoSlider from './VideoSlider';
import IMG from './imagesAset/img';
import styles from './styles';
import VideoFull from './VideoFull';

const VideoTime = (timeInSeconds) => {
  let pad = function (num, size) {
    return ('000' + num).slice(size * -1);
  };
  let time = parseFloat(timeInSeconds).toFixed(3);
  let minutes = Math.floor(time / 60) % 60;
  let seconds = Math.floor(time - minutes * 60);
  let result = `${pad(minutes, 2)}.${pad(seconds, 2)}`;
  return result;
};
const Index = ({fullscreen, source, onFullClose, minute, onFullProgress}) => {
  const posControl = React.useRef(new Animated.Value(0)).current;
  const videoRef = React.useRef();
  const [videoLenght, setVideoLenght] = React.useState(0);
  const [currentSec, setCurrentSec] = React.useState(0);
  const [isPause, setPause] = React.useState(false);
  const [isBuffering, setBuffering] = React.useState(true);
  const [isFullscreen, setFullscreen] = React.useState(false);
  const isFinish = Math.floor(currentSec) === Math.floor(videoLenght);

  const controlVideoAnim = (data = {}, autoClose) => {
    Animated.timing(posControl, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      ...data,
    }).start(() => {
      if (autoClose) {
        controlVideoAnim({toValue: 1, delay: 3600});
      }
    });
  };

  const handleSeekVideo = (time) => {
    videoRef.current?.seek(Number(time));
    controlVideoAnim();
  };

  const handleSeekVideoComplete = (time) => {
    setCurrentSec(time);
    if (!isPause) {
      controlVideoAnim({toValue: 1, delay: 1800});
    }
  };

  const handlePause = () => {
    controlVideoAnim({toValue: !isPause ? 1 : 0, delay: 1800});
    setPause(!isPause);
  };

  const handleLoad = ({duration}) => {
    setBuffering(false);
    setVideoLenght(duration);
    if (minute) {
      handleSeekVideo(minute);
    }
  };

  const handleProgress = ({currentTime}) => {
    setCurrentSec(currentTime);
    onFullProgress && onFullProgress(currentTime);
    isBuffering && setBuffering(false);
  };

  const handleBtnPausePress = () => {
    if (isFinish && currentSec !== 0) {
      handleSeekVideo(0);
    }
    handlePause();
  };

  const handleBtnFullscreenPress = (minute) => {
    if (!fullscreen) {
      if (!isFullscreen) {
        Orientation.lockToLandscape();
        if (!isPause) {
          handlePause();
        }
      } else {
        Orientation.lockToPortrait();
        handleSeekVideo(minute + 0.3834309997558594);
        handlePause();
      }
      setFullscreen(!isFullscreen);
    } else {
      Orientation.lockToPortrait();
      handlePause();
      onFullClose && onFullClose();
    }
  };

  const handleBuffer = ({isBuffering}) => {
    setBuffering(isBuffering);
  };

  const handleVideoPress = () => {
    if (!isPause) {
      controlVideoAnim({toValue: 0}, true);
    } else {
      handlePause();
    }
  };

  const onReadyForDisplay = () => controlVideoAnim({toValue: 1, delay: 3600});
  const posTop = posControl.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -47],
  });
  const bottomTop = posControl.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 47],
  });
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleVideoPress}
        style={[
          styles.container,
          fullscreen && {
            height: '100%',
            borderRadius: 0,
          },
        ]}>
        <View
          style={[
            styles.videoContainer,
            fullscreen && styles.videoContainerFullScreen,
          ]}>
          <VideoBase
            ref={videoRef}
            paused={isPause}
            resizeMode="contain"
            style={styles.video}
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            onLoad={handleLoad}
            onProgress={handleProgress}
            onBuffer={handleBuffer}
            onEnd={handlePause}
            onReadyForDisplay={onReadyForDisplay}
          />
          {isBuffering && (
            <ActivityIndicator
              style={[styles.loading, styles.overlay]}
              size="large"
              color={'blue'}
            />
          )}
          {videoLenght ? (
            <>
              <Animated.View
                style={[
                  styles.titleContainer,
                  {top: 0, transform: [{translateY: posTop}]},
                ]}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.title} numberOfLines={1}>
                    {/* {title ? title : otherTitle ? otherTitle : ''} */}
                    hola
                  </Text>
                </View>
                {fullscreen && (
                  <View style={styles.icon}>
                    <Image style={styles.img} source={IMG.profile.share} />
                  </View>
                )}
              </Animated.View>
              <Animated.View
                style={[
                  styles.controlContainer,
                  {bottom: 0, transform: [{translateY: bottomTop}]},
                ]}>
                <TouchableOpacity
                  onPress={handleBtnPausePress}
                  activeOpacity={0.8}
                  style={styles.icon}>
                  <Image
                    style={styles.img}
                    source={
                      IMG.learn.videoPlayer[
                        isFinish ? 'replay' : isPause ? 'play' : 'pause'
                      ]
                    }
                  />
                </TouchableOpacity>
                <View style={styles.minuteContainer}>
                  <Text style={styles.minute}>{VideoTime(currentSec)}</Text>
                </View>
                <VideoSlider
                  maximumValue={videoLenght}
                  value={currentSec}
                  onValueChange={handleSeekVideo}
                  onSlidingComplete={handleSeekVideoComplete}
                />
                <TouchableOpacity
                  onPress={handleBtnFullscreenPress}
                  activeOpacity={0.8}
                  style={styles.icon}>
                  <Image
                    style={styles.img}
                    source={
                      IMG.learn.videoPlayer[
                        fullscreen ? 'outscreen' : 'fullscreen'
                      ]
                    }
                  />
                </TouchableOpacity>
              </Animated.View>
            </>
          ) : (
            <View />
          )}
        </View>
      </TouchableOpacity>
      {!fullscreen && (
        <VideoFull
          // data={{
          //   ...data,
          //   url: sourceLink,
          //   title: title ? title : otherTitle,
          // }}
          minute={currentSec}
          source={source}
          isVisible={isFullscreen}
          onRequestClose={handleBtnFullscreenPress}
        />
      )}
    </>
  );
};

export default Index;
