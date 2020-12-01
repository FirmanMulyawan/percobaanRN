import {StyleSheet, Dimensions} from 'react-native';

const widthLandscape = Dimensions.get('window').height;
const heightLandscape = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: '#727272',
  },
  videoContainerFullScreen: {
    height: heightLandscape,
    aspectRatio: widthLandscape / heightLandscape,
    alignSelf: 'center',
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  video: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
  },
  videoFull: {
    backgroundColor: '#000',
  },
  sliderContainer: {
    flex: 1,
    height: 23,
    marginLeft: 12,
    marginRight: 17,
    justifyContent: 'center',
  },
  sliderTrack: {
    marginHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderPrevTrack: {
    height: 4,
    width: '0%',
    backgroundColor: 'blue',
  },
  sliderThumb: {
    position: 'absolute',
    width: 12,
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex: 1,
  },
  sliderNextTrack: {
    height: 4,
    width: '100%',
    backgroundColor: 'grey',
  },

  titleContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    // fontSize: 20,
    color: '#fff',
  },
  controlContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingVertical: 6.7,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  minuteContainer: {
    width: 49,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  minute: {
    // ...FONT.odinBold(3.8, false, 1),
    color: '#fff',
  },
  icon: {
    width: 19,
    aspectRatio: 1,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
