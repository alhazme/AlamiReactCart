import React from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartPage, DevicePage} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="CartPage">
      <Stack.Screen name="CartPage" component={CartPage} />
      <Stack.Screen name="DevicePage" component={DevicePage} />
    </Stack.Navigator>
  );
};

export default Router;
