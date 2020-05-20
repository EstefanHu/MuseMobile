import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Library } from '../views/library';

const Stack = createStackNavigator();

export const LibraryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Library' component={Library} />
    </Stack.Navigator>
  );
};