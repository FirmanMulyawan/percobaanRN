/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import Surah from '../Surah';
import ByWord from '../ByWord';
const Tab = createMaterialTopTabNavigator();

const Index = ({route}) => {
  let activeTintColor = 'blue';
  let inactiveTintColor = 'white';
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
      }}>
      <Tab.Navigator
        initialRouteName="Feed"
        swipeEnabled={false}
        sceneContainerStyle={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        tabBarOptions={{
          style: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 10,
            backgroundColor: 'red',
          },
          labelStyle: {
            textAlign: 'center',
            justifyContent: 'center',
            textTransform: 'none',
          },
          indicatorStyle: {
            height: null,
            top: 0,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Tab.Screen
          initialParams={route.params}
          name="Surah"
          component={Surah}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  fontSize: 25,
                  color: focused ? activeTintColor : inactiveTintColor,
                }}>
                Surah
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="ByWord"
          component={ByWord}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  fontSize: 25,
                  color: focused ? activeTintColor : inactiveTintColor,
                }}>
                By-Word
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Index;
