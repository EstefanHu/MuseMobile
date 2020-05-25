import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Launch } from '../views/launch.js';

const Stack = createStackNavigator();

export const PathStack = () => {
  return (
    <Stack.Navigator initialRouteName='Launch'>
      <Stack.Screen name='Launch' component={Launch} />
    </Stack.Navigator>
  );
};