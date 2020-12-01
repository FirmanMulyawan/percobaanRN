import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CalenderStrip from '../screens/CalenderStrip';
import DropDown from '../screens/DropDown';
import Splash from '../screens/Splash';
import Video from '../screens/Video';
import GetAPI from '../screens/GetAPI';
import Loading from '../screens/Loading';
import RefreshControl from '../screens/RefreshControl';
import CobaState from '../screens/CobaState';
import TextInput from '../screens/TextInput';
import Layout from '../screens/Layout';
import Modal from '../screens/Modal';
import Pressable from '../screens/Pressable';
import Animated from '../screens/Animated';
import DragNDrop from '../screens/DragNDrop';
import API from '../screens/API';
import APIDummy from '../screens/APIDummy';
import APIAXIOS from '../screens/APIAXIOS';
import LocalAPI from '../screens/LocalAPI';
import RealAPI from '../screens/RealAPI';
import APILevel from '../screens/APILevel';
import APILoading from '../screens/APILoading';
import APIRefresh from '../screens/APIRefresh';
import GetQuran from '../screens/GetQuran';
import GetSurah from '../screens/GetSurah';
import AsyncStorage from '../screens/AsyncStorage';
import Carousel from '../screens/Carousel';
import CarouselDevTo from '../screens/CarouselDevTo';
import LiveSearch from '../screens/LiveSearch';
import LiveSearchFreeCode from '../screens/LiveSearchFreeCode';
import SearchHeader from '../screens/SearchHeader';
import SearchFacebook from '../screens/SearchFacebook';
import PasscodeTextInput from '../screens/PasscodeTextInput';
import DropDownBianglala from '../screens/DropDownBianglala';
import DragNDropDualingo from '../screens/DragNDropDualingo';
import InfiniteLoop from '../screens/InfiniteLoop';
import CekInternet from '../screens/CekInternet';
import ProgresCircle from '../screens/ProgresCircle';
import Chart from '../screens/Chart';
import DoubleCarousel from '../screens/DoubleCarousel';
import Redux from '../screens/Redux';
import CalenderBugiDev from '../screens/CalenderBugiDev';
import CalenderStripCustom from '../screens/CalenderStripCustom';
import CobaSound from '../screens/CobaSound';
import RNSound from '../screens/RNSound';
import SnapCarousel from '../screens/SnapCarousel';
import SearchFlatlist from '../screens/SearchFlatlist';
import SpeechRecognition from '../screens/SpeechRecognition';
import VoiceBeta from '../screens/VoiceBeta';

const {Navigator, Screen} = createStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="Splash"
        headerMode="none">
        <Screen name="Splash" component={Splash} />
        <Screen name="CalenderStrip" component={CalenderStrip} />
        <Screen name="DropDown" component={DropDown} />
        <Screen name="Video" component={Video} />
        <Screen name="GetAPI" component={GetAPI} />
        <Screen name="Loading" component={Loading} />
        <Screen name="RefreshControl" component={RefreshControl} />
        <Screen name="CobaState" component={CobaState} />
        <Screen name="TextInput" component={TextInput} />
        <Screen name="Layout" component={Layout} />
        <Screen name="Modal" component={Modal} />
        <Screen name="Pressable" component={Pressable} />
        <Screen name="Animated" component={Animated} />
        <Screen name="DragNDrop" component={DragNDrop} />
        <Screen name="API" component={API} />
        <Screen name="APIDummy" component={APIDummy} />
        <Screen name="APIAXIOS" component={APIAXIOS} />
        <Screen name="LocalAPI" component={LocalAPI} />
        <Screen name="RealAPI" component={RealAPI} />
        <Screen name="APILevel" component={APILevel} />
        <Screen name="APILoading" component={APILoading} />
        <Screen name="APIRefresh" component={APIRefresh} />
        <Screen name="GetQuran" component={GetQuran} />
        <Screen name="GetSurah" component={GetSurah} />
        <Screen name="AsyncStorage" component={AsyncStorage} />
        <Screen name="Carousel" component={Carousel} />
        <Screen name="CarouselDevTo" component={CarouselDevTo} />
        <Screen name="LiveSearch" component={LiveSearch} />
        <Screen name="LiveSearchFreeCode" component={LiveSearchFreeCode} />
        <Screen name="SearchHeader" component={SearchHeader} />
        <Screen name="SearchFacebook" component={SearchFacebook} />
        <Screen name="PasscodeTextInput" component={PasscodeTextInput} />
        <Screen name="DropDownBianglala" component={DropDownBianglala} />
        <Screen name="DragNDropDualingo" component={DragNDropDualingo} />
        <Screen name="InfiniteLoop" component={InfiniteLoop} />
        <Screen name="CekInternet" component={CekInternet} />
        <Screen name="ProgresCircle" component={ProgresCircle} />
        <Screen name="Chart" component={Chart} />
        <Screen name="DoubleCarousel" component={DoubleCarousel} />
        <Screen name="Redux" component={Redux} />
        <Screen name="CalenderBugiDev" component={CalenderBugiDev} />
        <Screen name="CalenderStripCustom" component={CalenderStripCustom} />
        <Screen name="CobaSound" component={CobaSound} />
        <Screen name="RNSound" component={RNSound} />
        <Screen name="SnapCarousel" component={SnapCarousel} />
        <Screen name="SearchFlatlist" component={SearchFlatlist} />
        <Screen name="SpeechRecognition" component={SpeechRecognition} />
        <Screen name="VoiceBeta" component={VoiceBeta} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
