import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Map } from '../views/map';

const Stack = createStackNavigator();

export const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  )
}