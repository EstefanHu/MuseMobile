import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Map } from '../views/map';
import { Story } from '../views/story';

const Stack = createStackNavigator();

export const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name='Story' component={Story} />
    </Stack.Navigator>
  )
}