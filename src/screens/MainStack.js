import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import AppStack from './AppStack';
import Detail from './Detail';
import Search from './Search';
import mallDetails from './mallDetails'
import detailsMall from '../screens/detailsMall'
const Stack = createStackNavigator();

const MainStack = ({navigation, routes}) => {
  return (
    <Stack.Navigator initialRouteName="Detail">
      <Stack.Screen
        component={AppStack}
        name="app"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Detail}
        name="detail"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Search}
        name="search"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={mallDetails}
        name="mallDetails"
        options={{headerShown: false}}
      />
      <Stack.Screen
      component={detailsMall}
      name="detailsMall"
      options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default MainStack;
